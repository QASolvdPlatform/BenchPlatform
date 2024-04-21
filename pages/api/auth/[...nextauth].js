import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
	],
	session: {
		strategy: 'jwt', // Using JWT for session management
		maxAge: 30 * 24 * 60 * 60, // 30 days
		updateAge: 24 * 60 * 60, // 24 hours
	},
	cookies: {
		sessionToken: {
			name: 'next-auth.session-token',
			options: {
				httpOnly: true,
				sameSite: 'lax',
				path: '/',
				secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
			},
		},
	},
	callbacks: {
		async signIn({ user, account, profile }) {
			return true;
		},
		async redirect({ url, baseUrl }) {
			return baseUrl; // After signing in, redirect to the base URL
		},
		async session({ session, token, user }) {
			// Add properties to session, if needed
			return session;
		},
		async jwt({ token, user, account, profile, isNewUser }) {
			// Add properties to the JWT token, if needed
			return token;
		}
	}
});
