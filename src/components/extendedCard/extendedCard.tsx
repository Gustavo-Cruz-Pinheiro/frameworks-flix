import { CardProps } from "../card/card";
import { CardContainer, CardFlex, CardBody, CardImg, CardText, CardTitle, } from "./style";

const ExtendedCard: React.FC<CardProps> = ({
    id,
    title,
    overview,
    release_date,
    vote_average,
    poster_path
}) => {
    return ( 
        <CardContainer>
            <CardFlex>
                <CardImg src={"https://image.tmdb.org/t/p/w300" + poster_path}  />
                <CardBody>
                    <CardTitle>{title}</CardTitle> 
                    <CardText>Lançamento: {release_date}</CardText>
                    <CardText>Nota: {vote_average}</CardText>
                    <CardText>Descrição: {overview}</CardText>
                </CardBody>
           </CardFlex>
        </CardContainer>
    )
}
export default ExtendedCard;