import { createContext, ReactNode, useState } from "react";

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextData {
    produtos: number[];
    adicionarProduto: (id: number) => void;
    removerProduto: (id: number) => void;
    removerTodos: () => void;
}

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [produtos, setProdutos] = useState<number[]>([]);

    function verificaProdutos(id: number) {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i] === id) {
                return true;
            }
        }
        return false;
    }

    function adicionarProduto(id: number) {
        if (verificaProdutos(id)) {
            alert("O produto já está no carrinho!")
        } else {
            setProdutos([...produtos, id]);
            alert("Produto adicionado ao carrinho com sucesso!")
        }
    }

    function removerProduto(id: number) {
        setProdutos(produtos.filter(item => item !== id));

        alert("Item removido do carrinho com sucesso!")
    }

    function removerTodos() {
        setProdutos([]);

        alert("Produtos deletados com sucesso!")
    }
    
    return (
        <CartContext.Provider value={{ produtos, adicionarProduto, removerProduto, removerTodos }}>
            {children}
        </CartContext.Provider>
    )

}