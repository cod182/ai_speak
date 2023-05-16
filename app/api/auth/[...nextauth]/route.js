import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: ''
    })
  ],
  async session({ session }) {

  },
  async signIn({ profile }) { }
})

export { handler as GET, handler as POST }