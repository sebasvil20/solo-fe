import { getProviders } from 'next-auth/react'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/config/authOptions'
import { ProviderButton } from '@/components/provider-button'
import { redirect } from 'next/navigation'

export default async function Auth() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/')
  }

  const providers = await getProviders()

  return (
    <>
      <div className='flex min-h-full flex-col justify-center px-6'>
        <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-zinc-950 dark:text-slate-100'>
          Sign in to your account
        </h2>

        <div className='mt-10 flex flex-row justify-center'>
          {Object.values(providers || []).map((provider) => (
            <ProviderButton key={provider.name} provider={provider} />
          ))}
        </div>
      </div>
    </>
  )
}
