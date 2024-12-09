import { emailOTPClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
	plugins: [
		emailOTPClient()
	]
});



export const { signIn, signUp, signOut, useSession } = authClient;
