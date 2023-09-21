import Credentials from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'

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
