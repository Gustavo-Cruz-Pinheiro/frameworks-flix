import { useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import Card from "../../components/card/card";
import { Tittle } from "../../components/tittle";
import { useNavigate } from "react-router-dom";

interface MovieProps {
    id: number,
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
    popularity: number,
    favoritos: boolean,
}

export function Cart() {
    const [precoTotal, setPrecoTotal] = useState(0);
    const [qtdTotal, setQtdTotal] = useState(0);

    const { produtos, removerTodos } = useContext(CartContext);

    const [listFilms, setListFilms] = useState<MovieProps[]>([]);

    const navigate = useNavigate();

    function handleDeleteAll() {
        removerTodos();

        navigate("/", { replace: true });
    }

    useEffect(() => {
        function getProducts() {
            const list = [] as MovieProps[];
            let precoTotal = 0;
            let qtdTotal = 0;

            Promise.all(produtos.map(async item => {
                const url = `https://api.themoviedb.org/3/movie/${item}?api_key=6ae684194ce31c3d3494c66057593caa`;

                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    qtdTotal++;
                    const popularity = Number(data.popularity);
                    const preco = Number((popularity / 100));
                    precoTotal += preco;

                    list.push({
                        id: data.id,
                        title: data.title,
                        poster_path: data.poster_path,
                        overview: data.overview,
                        release_date: data.release_date,
                        vote_average: data.vote_average,
                        popularity: data.popularity,
                        favoritos: false,
                    });
                } catch (error) {
                    console.log(error);
                }
            })).then(() => {
                setPrecoTotal(precoTotal);
                setQtdTotal(qtdTotal);
                setListFilms(list);
            });
        }

        getProducts();
    }, []);

    return (
        <>
            <Tittle titulo={"Carrinho"} />

            <div className="card-list">
                {
                    listFilms.length === 0 ? (
                        <p className="msg">
                            Nenhum filme no carrinho.
                        </p>
                    ) : (
                        listFilms.map((item, index) => (
                            <Card
                                key={index}
                                id={item.id}
                                title={item.title}
                                overview={item.overview}
                                release_date={item.release_date}
                                vote_average={item.vote_average}
                                poster_path={item.poster_path}
                                popularity={item.popularity}
                                favoritos={false}
                                carrinho={true}
                            />
                        ))
                    )
                }
            </div>

            <div className="center">
                <div className="preco">
                    Preço Total: R${precoTotal.toFixed(2)} | 
                </div>
                <div>
                    Quantidade de Filmes: {qtdTotal}
                </div>
            </div>

            <div className="center">
                <button className="button" onClick={handleDeleteAll}>Apagar Todos</button>
            </div>
        </>
    )
}