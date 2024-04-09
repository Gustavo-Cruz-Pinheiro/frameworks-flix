import styled from "styled-components";

const CardContainer = styled.div`
    width: 65%;
    padding: 2rem;
    border: 2px solid gray;
    border-radius: 2rem;

    @media screen and (max-width: 900px){
        margin: 2rem;
        width: 90%;
    }

    @media screen and (max-width: 600px) {
        width: 90%; 
        margin: 2rem 0;
    }
`

const CardFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const CardBody = styled.div`
    width: 45%;
    word-wrap: break-word;
    text-align: justify;
    text-justify: inter-word;

    @media screen and (max-width: 900px) {
        width: 100%;
        padding: 2rem  0 0 0;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem 0 0 0;
    }
`

const CardImg = styled.img`
    width: 20rem;
    height: 25rem;
    object-fit: contain;

    @media screen and(max-width: 900px){
        width: 100%;
        height: 10rem;
    }

    @media screen and (max-width: 600px) {
        height: 15rem;
    }
`

const CardTitle = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: start;

    @media screen and (max-width: 600px){
        font-size: 1.1rem;
    }
`

const CardText = styled.p``

export { CardContainer, CardFlex, CardBody, CardImg, CardTitle, CardText, }