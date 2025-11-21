/* eslint-disable react-refresh/only-export-components */
// src/lib/AuthContext.tsx
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "./firebase";

interface AuthContextType {
	user: User | null;
	loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
	user: null,
	loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (u) => {
			setUser(u);
			setLoading(false);
		});
		return () => unsub();
	}, []);

	return (
		<AuthContext.Provider value={{ user, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
