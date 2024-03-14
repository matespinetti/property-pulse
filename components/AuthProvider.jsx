"use client";
import { SessionProvider } from "next-auth/react"; // Import the SessionProvider component

const AuthProvider = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
