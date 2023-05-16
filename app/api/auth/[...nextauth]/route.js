import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  async session({ session }) {

  },
  async signIn({ profile }) {
    try {
      //serverless route/ Lambda function. Only opened when called

    }
  }
})

export { handler as GET, handler as POST }