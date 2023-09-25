import GoogleProvider from 'next-auth/providers/google'
import { NextAuthOptions } from 'next-auth'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },

    async session({ session, token, user }) {
      session.user = token as any

      return session
    },

    async signIn({ account, profile, user }) {
      console.log('profile', profile)
      console.log('account', account)
      console.log('user', user)
      user.nickname = profile?.email?.split('@')[0] || ''
      return true
    },
  },
}
