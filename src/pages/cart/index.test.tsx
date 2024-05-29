import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import '@testing-library/user-event';
import { Cart } from './index';
import { CartContext, CartContextData } from '../../context/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';

describe('no carrinho de compras', () => {
    it('deve chamar removeTodos "Apagar Todos" for clicado', async () => {
        const mockRemoverTodos = jest.fn();
        const mockAdicionarProduto = jest.fn();
        const mockRemoverProduto = jest.fn();
        const mockProdutos = [1, 2, 3];

        const cartContextValue: CartContextData = {
            produtos: mockProdutos,
            adicionarProduto: mockAdicionarProduto,
            removerProduto: mockRemoverProduto,
            removerTodos: mockRemoverTodos,
        };

        render(
            <Router>
                <CartContext.Provider value={cartContextValue}>
                    <Cart />
                </CartContext.Provider>
            </Router>
        );

        const button = screen.getByText('Apagar Todos');
        await userEvent.click(button);

        expect(mockRemoverTodos).toHaveBeenCalled();
    });
});
