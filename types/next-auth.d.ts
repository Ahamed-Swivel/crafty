import NextAuth from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string
  }

  interface User {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    token?: string | null
  }

  interface DefaultUser {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    token?: string | null
  }
}
