import { useAuthInfoQuery } from '@dyplove/graphql-api/user.generated';
import { onAuthStateChanged, type User } from 'firebase/auth';
import type React from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '~/lib/firebase';

interface AuthContextType {
	user: User | null;
	loading: boolean;
	emailVerifRequired: boolean;
	isReady: boolean;
	signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [isReady, _setIsReady] = useState(false);
	const { data: authInfo, loading: authInfoLoading } = useAuthInfoQuery();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user?.emailVerified) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return unsubscribe;
	}, []);

	useEffect(() => {
		const unsubscribe = auth.onIdTokenChanged((user) => {
			console.log('idTokenChanged>>', user);
			if (user?.emailVerified) {
				setUser(user);
			}
		});

		return unsubscribe;
	}, []);

	const signOut = async () => {
		try {
			await auth.signOut();
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	const value = {
		user,
		loading,
		signOut,
		emailVerifRequired: authInfo?.authInfo?.emailVerifRequired ?? false,
		isReady,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
}

// TODO: update the isReady state when the authInfo is loaded
