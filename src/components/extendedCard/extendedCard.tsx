import { CardProps } from "../card/card";
import { CardContainer, CardFlex, CardBody, CardImg, CardText, CardTitle, } from "./style";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { Heart, ShoppingCart } from "@phosphor-icons/react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const ExtendedCard: React.FC<CardProps> = ({
    id,
    title,
    overview,
    release_date,
    vote_average,
    poster_path,
    popularity
}) => {
    const { adicionarProduto } = useContext(CartContext);

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

    function handleCartAdd() {
        adicionarProduto(id);
    }

    return ( 
        <CardContainer>
            <CardFlex>
                <CardImg src={"https://image.tmdb.org/t/p/w300" + poster_path}  />
                <CardBody>
                    <CardTitle>{title}</CardTitle> 
                    <CardText>Lançamento: {release_date}</CardText>
                    <CardText>Nota: {vote_average}</CardText>
                    <CardText>Descrição: {overview}</CardText>
                    <CardText>Preço(R$): {(popularity / 100).toFixed(2)}</CardText>
                    <CardFlex>
                        <Heart size={26} color="red" weight="duotone" onClick={handleBookmark} style={{ cursor: "pointer" }} />
                        <ShoppingCart size={26} color="yellow" weight="bold" onClick={handleCartAdd} style={{ cursor: "pointer" }} />
                    </CardFlex>
                </CardBody>
           </CardFlex>
        </CardContainer>
    )
}
export default ExtendedCard;