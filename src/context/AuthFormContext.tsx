import React, { createContext, useContext, useState } from "react";

interface AuthFormState {
    email: string;
    setEmail: (v: string) => void;
    password: string;
    setPassword: (v: string) => void;
    error: string;
    setError: (v: string) => void;
    loading: boolean;
    setLoading: (v: boolean) => void;
}

const AuthFormContext = createContext<AuthFormState | undefined>(undefined);

export const AuthFormProvider = ({ children }: { children: React.ReactNode }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <AuthFormContext.Provider value={{ email, setEmail, password, setPassword, error, setError, loading, setLoading }}>
            {children}
        </AuthFormContext.Provider>
    );
};

export const useAuthForm = () => useContext(AuthFormContext);