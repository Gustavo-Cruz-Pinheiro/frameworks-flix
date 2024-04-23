import { useNavigate } from "react-router-dom";
import { CardBody, CardButton, CardContainer, CardImg, CardFlex, CardTitle, CardText } from "../styled-components/card/style";
import { Heart, Trash } from "@phosphor-icons/react";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export interface CardProps {
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

const Card: React.FC<CardProps> = ({
    id,
    title,
    overview,
    release_date,
    vote_average,
    poster_path,
    popularity,
    favoritos,
    carrinho,
}) => {
    const { removerProduto, produtos } = useContext(CartContext);
    
    const navigate = useNavigate()

    function handleShowMore(id: number) {
        const url = `/produto/${id}`;
        navigate(url, { replace: true })
    }

    async function checkBookmark() {
        const BookmarksCollection = collection(db, 'bookmarksMovies');
        const queryRef = query(BookmarksCollection);

        const snapshot = await getDocs(queryRef);

        const isFavorited = snapshot.docs.some(doc => doc.data().id === id);

        return isFavorited;
    }
    
    async function handleBookmark() {
        if(!localStorage.getItem('@userData')) {
            alert('Para favoritar um filme, primeiro você dever realizar o login!')
        } else {
            if (await checkBookmark()) {
                alert('Filme já favoritado!')
            } else {
                alert('Filme Favoritado com sucesso!')
    
                addDoc(collection(db, 'bookmarksMovies'), {
                    id: id,
                    title: title,
                    poster_path: poster_path,
                    overview: overview,
                    release_date: release_date,
                    vote_average: vote_average,
                    popularity: popularity,
                    bookmarkedAt: new Date()
                })
                    .then(() => {
                        console.log('Filme Favoritado!');
                    })
                    .catch((error) => {
                        console.log('Erro ao favoritar filme!', error);
                    })
            }
        }
    }

    async function handleMovieCartRemove(id: number) {
        removerProduto(id);

        const url = `/`;
        navigate(url, { replace: true })
    }

    return (
        <>
            <CardContainer>
                <CardImg src={"https://image.tmdb.org/t/p/w300" + poster_path} />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>Classificação: {vote_average}</CardText>
                    <CardText>Preço(R$): {(popularity / 100).toFixed(2)}</CardText>
                    <CardFlex>
                        <CardButton onClick={() => handleShowMore(id)}>Ver Mais</CardButton>
                        {favoritos && 
                            <Heart size={26} color="red" weight="duotone" onClick={handleBookmark} style={{ cursor: "pointer" }} />
                        }
                        {carrinho && 
                            <Trash size={26} color="gray" weight="bold" onClick={() => handleMovieCartRemove(id)} style={{ cursor: "pointer" }} />
                        }
                    </CardFlex>
                </CardBody>
            </CardContainer>
        </>
    )
}

export default Card;