import {createContext, useState, useEffect, ReactNode, Children} from 'react';
import { auth } from '@/services/firebase';
import { User, onAuthStateChanged} from 'firebase/auth';
import { AuthServices } from '@/services/auth_services';
import { router } from 'expo-router';

interface AuthContextData {
    user: User | null;
    loading: boolean;
    signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({
    user: null,
    loading: true,
    signOut: async () => {}
})

interface AuthProps {
    children: ReactNode
}


export function AuthProvider({children}: AuthProps) {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const unsub = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return unsub;

    }, [])


    const handleSignOut = async () => {
        await AuthServices.signOut();
        router.replace('/(auth)/signin/page') 
    }

    return(
        <AuthContext.Provider
            value={{user, loading, signOut: handleSignOut}}
        >
            {children}
        </AuthContext.Provider>
    )
}