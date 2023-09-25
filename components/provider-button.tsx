'use client'
import { Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import { Google } from './icons'

export const ProviderButton = ({ provider }: { provider: any }) => {
  return (
    <Button
      color='secondary'
      className='text-medium p-5  max-w-[200px]'
      startContent={<Google stroke='white' strokeWidth={3} />}
      onClick={() => signIn(provider.id)}
    >
      With {provider.name}
    </Button>
  )
}
