// This file will configure NextAuth to use Google for authentication
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
console.log("GoogleProvider: ", GoogleProvider);

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
});
