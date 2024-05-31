import styled from "styled-components";
import React, { useContext } from 'react';
import UserContext from "../Contexts/UserContext.js";
import { movieList } from "./movieList.js";
import { SlBasket } from "react-icons/sl";

function MovieRender({ movie }) {
    const { itens, setItens } = useContext(UserContext);
    return (
        <>
            <Movie>
                <ul>
                    <li><img src={movie.image} /></li>
                    <li>{movie.name}</li>
                    <li>{movie.price}</li>
                </ul>
                <ButtonAdicionarAoCarrinho><CartItemContainer><SlBasket /><span>{itens}</span></CartItemContainer> Adicionar ao carrinho</ButtonAdicionarAoCarrinho>
            </Movie>
        </>
    );
}

export default function MovieCatalog() {
    return (
        <>
            <Page>
                <MoviesContainer>{movieList != 0 ? <>{movieList.map((movie, key) => (<MovieRender movie={movie} />))}</> : <> NENHUM FILME CADASTRADO</>}</MoviesContainer>
            </Page>
        </>
    );
}

const Page = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MoviesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    height: 100%;
`


const Movie = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    color: #000000;
    height: 300px;
    width: 300px;
    border-radius: 4px;
    margin: 12px;

    li {
        display: flex;
        justify-content: center;
        margin: 4px 0px 4px 0px;
        color: #000000;
        font-weight: bold;
    }
`;

const ButtonAdicionarAoCarrinho = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 40px;
    background-color: #009EDD;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
`;

const CartItemContainer = styled.div`
    margin: 0px 8px 0px 0px;

    span {
        margin: 0px 0px 0px 5px;
    }
`;