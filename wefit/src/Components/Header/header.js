import styled from "styled-components";
import { IoMdBasket } from "react-icons/io";
import React, { useContext } from 'react';
import UserContext from "../Contexts/UserContext.js";

export default function Header() {
    const { itens, setItens } = useContext(UserContext);

    return (
        <>
            <Page>
                <WeMovies>WeMovies</WeMovies>
                <MeuCarrinhoContainer>
                    <MeuCarrinhoItens>
                        <h1>Meu carrinho</h1>
                        <h2>{itens} itens</h2>
                    </MeuCarrinhoItens>
                    <MdBasket />

                </MeuCarrinhoContainer>

            </Page>
        </>
    );
}

const Page = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #2F2E41;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;
`;

const WeMovies = styled.div`

`;

const MeuCarrinhoContainer = styled.div`
    display: flex;
`;

const MeuCarrinhoItens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 0px 24px 0px 0px;
`;

const MdBasket = styled(IoMdBasket)`
    color: #FFFFFF;
    transform: scale(3);
    margin: 5px 0px 0px 0px;
`;