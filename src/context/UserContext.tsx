import { createContext, ReactNode, useState } from "react";
import { db } from "../services/firebaseConnection";
import { doc, updateDoc } from "firebase/firestore";

interface UserProviderProps {
    children: ReactNode;
}

interface UserContextData {
    nome: string;
    email: string;
    atualizarUsuario: (nome: string) => void;
    logar: (nome: string, email: string) => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function atualizarUsuario(nome: string) {
        const docRef = doc(db, 'user', 'ZCSRwnHYXktcYNBRC6PI')
    
        updateDoc(docRef, {
            'nome': nome
        })
        setNome(nome);

        alert("Nome de usuário alterado com sucesso!")
    }

    function logar(nome: string, email: string) {
        setNome(nome);
        setEmail(email);
    }
    
    return (
        <UserContext.Provider value={{ nome, email, atualizarUsuario, logar }}>
            {children}
        </UserContext.Provider>
    )

}