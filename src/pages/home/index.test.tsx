import { render, screen, waitFor } from '@testing-library/react';
import { Home } from './index';

const mockApiResponse = {
    results: [
        {
            id: 1,
            title: 'Teste Filme 1',
            overview: 'Este é o teste do filme 1.',
            release_date: '2022-01-01',
            vote_average: 8.5,
            poster_path: '/testpath1.jpg',
            popularity: 500,
        },
        {
            id: 2,
            title: 'Teste Filme 2',
            overview: 'Este é o teste do filme 2.',
            release_date: '2022-02-02',
            vote_average: 7.5,
            poster_path: '/testpath2.jpg',
            popularity: 400,
        },
    ],
};

describe('Home component', () => {
    beforeEach(() => {
        // Mockar a função fetch antes de cada teste
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockApiResponse),
            })
        ) as jest.Mock;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('deve lidar com erro na chamada da API', async () => {
        // Mockar a função fetch para simular um erro
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('API Error'))
        ) as jest.Mock;

        // ARRANGE
        const { getByText } = render(<Home />);

        // ACT
        // Não há ação específica a ser tomada, pois a chamada da API ocorre automaticamente no useEffect

        // ASSERT
        // Verificar se o título está presente na tela
        expect(getByText('Filmes em destaque')).toBeInTheDocument();

        // Esperar que os filmes não sejam carregados devido ao erro
        await waitFor(() => {
            expect(screen.queryByText('Test Movie 1')).not.toBeInTheDocument();
            expect(screen.queryByText('Test Movie 2')).not.toBeInTheDocument();
        });

        // Verificar se a mensagem de erro foi logada no console
        // (Opcional, se você deseja capturar e testar logs de erro)
    });
});
