'use client'

import {
  Button,
  User as NextUIUser,
  Skeleton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Listbox,
  ListboxItem,
} from '@nextui-org/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { SignOut } from './icons'

export const User = () => {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className='max-w-[300px] w-full flex items-center gap-3'>
        <div>
          <Skeleton className='flex rounded-full w-12 h-12' />
        </div>
        <div className='w-full flex flex-col gap-2'>
          <Skeleton className='h-3 w-3/5 rounded-lg' />
          <Skeleton className='h-3 w-4/5 rounded-lg' />
        </div>
      </div>
    )
  }
  if (!session) {
    return (
      <Button color='secondary' onClick={() => signIn()}>
        Sign in
      </Button>
    )
  }

  const iconClasses = 'text-default-500 pointer-events-none flex-shrink-0'

  return (
    <Popover placement='bottom' showArrow={true}>
      <PopoverTrigger>
        <NextUIUser
          name={session?.user?.name}
          avatarProps={{
            src: session?.user?.image ? session?.user?.image : '/avatar1.png',
          }}
        />
      </PopoverTrigger>
      <PopoverContent>
        <div className='w-full max-w-[260px] px-1 py-2 rounded-small'>
          <Listbox variant='flat' aria-label='Listbox menu with icons'>
            <ListboxItem
              key='new'
              onClick={() => signOut()}
              startContent={
                <SignOut className={iconClasses} size={20} stroke='#F31260' />
              }
            >
              Sign out
            </ListboxItem>
          </Listbox>
        </div>
      </PopoverContent>
    </Popover>
  )
}
