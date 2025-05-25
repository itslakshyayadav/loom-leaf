import { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../supabaseClient";
import type { Session } from "@supabase/supabase-js";


interface AuthContextType {
    // user: any;
    // login: (username: string, password: string) => Promise<void>;
    // logout: () => void;
}

interface AuthContextType {
    session: Session | null;
    SignUpNewUser: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; data?: any; error?: any }>;
    signInUser: ({ email, password }: { email: string; password: string }) => Promise<{ success: boolean; data?: any; error?: any }>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [session, setSession] = useState<Session | null>(null);;

    //Sign up
    const SignUpNewUser: AuthContextType["SignUpNewUser"] = async ({ email, password }) => {

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (error) {
            console.error("Error signing up:", error);
            return { success: false, error: error };
        }
        return { success: true, data };

    }

    // sign in
    const signInUser: AuthContextType["signInUser"] = async ({ email, password }) => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (error) {
            console.error("Error signing in:", error);
            return { success: false, error: error };
        }
        return { success: true, data };
    }


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);

    // SIGN OUT
    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing out:", error);
        } else {
            setSession(null);
        }
    };


    return (
        <AuthContext.Provider value={{ session, SignUpNewUser, signInUser, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};