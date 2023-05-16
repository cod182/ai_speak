import NextAuth from 'next-auth/next';
import Google from 'next-auth/providers/google';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';

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
      await connectToDB()

      //check if user exists already


      // create new user and add to database

      return true
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }
})

export { handler as GET, handler as POST }