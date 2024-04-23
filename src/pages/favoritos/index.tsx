import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import "./style.css";
import { Tittle } from "../../components/tittle";

interface ProductBookmarksProps {
    id: number,
    title: string,
    overview: string,
    release_date: string,
    vote_average: number,
    poster_path: string,
    popularity: number,
    favoritos: boolean,
    carrinho: boolean,
}

export function Favoritos() {
    const [products, setProducts] = useState<ProductBookmarksProps[]>([])

    useEffect(() => {
        function getBookmarks() {
            const BookmarksCollection = collection(db, 'bookmarksMovies');
            const queryRef = query(BookmarksCollection, orderBy('bookmarkedAt', 'desc'));

            const unsub = onSnapshot(queryRef, (snapshot) => {
                const list = [] as ProductBookmarksProps[]
                snapshot.forEach((doc) => {
                    list.push(
                        {
                            id: doc.data().id,
                            title: doc.data().title,
                            poster_path: doc.data().poster_path,
                            overview: doc.data().overview,
                            release_date: doc.data().release_date,
                            vote_average: doc.data().vote_average,
                            popularity: doc.data().popularity,
                            favoritos: false,
                            carrinho: false,
                        }
                    )
                })
                setProducts(list)
            });
        }
        getBookmarks()
    }, [])

    return (
        <>
            <Tittle titulo={"Seus Filmes Favoritos"}/>
            <div className="card-list">
                {products.length === 0 ? (
                    <p className="msg">
                        Nenhum produto favoritado.
                    </p>
                ) : (
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
                            favoritos={false}
                            carrinho={false}
                        />
                    ))
                )}
            </div>
        </>
    )
}