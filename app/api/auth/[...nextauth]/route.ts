import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'

const users = [
  {
    id: '1',
    name: 'Juanse Villegas',
    nickname: '@JuanseTech',
    email: 'a@e.com',
    password: '123',
    image: './avatar1.png',
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', placeholder: 'enter email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials, req) {
        // if (!credentials || !credentials.email || !credentials.password)
        //   return null
        // const user = users.find((item) => item.email === credentials.email)
        // if (user?.password === credentials.password) return user
        return users[0]
      },
    }),
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
