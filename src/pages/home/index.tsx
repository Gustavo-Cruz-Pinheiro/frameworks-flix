import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import './style.css';
import { Tittle } from "../../components/tittle";

export interface ProductProps {
    id: number,
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
    popularity: number,
}

export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        function getProducts() {
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6ae684194ce31c3d3494c66057593caa')
                .then(response => response.json())
                .then((data) => {
                    setProducts(data.results);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        getProducts()
    }, [])

    return (
        <>
            <Tittle titulo={"Filmes em destaque"}/>
            <div className='card-list'>
                {
                    products.map((item, index) => (
                        <Card
                            key={index}
                            id={item.id}
                            title={item.title}
                            overview={item.overview}
                            release_date={item.release_date}
                            vote_average={item.vote_average}
                            poster_path={item.poster_path}
                            popularity={item.popularity}
                            favoritos={true}
                            carrinho={false}
                        />
                    ))
                }
            </div>
        </>
    )
}