import '@/styles/globals.css'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Providers } from './providers'
import { Navbar } from '@/components/navbar'
import clsx from 'clsx'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'SOLO',
    template: 'SOLO',
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className='relative flex flex-col h-screen'>
            <Navbar />
            <main className='container mx-auto max-w-7xl pt-16 px-6 flex-grow'>
              {children}
            </main>
            <footer className='w-full flex items-center justify-center py-3'>
              <Link
                className='flex items-center gap-1 text-current'
                href='https://twitter.com/JuanseTech'
                title='@JuanseTech'
              >
                <span className='text-default-600'>With ❤️ by @JuanseTech</span>
              </Link>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
