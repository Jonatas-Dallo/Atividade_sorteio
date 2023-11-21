import React from "react";
import styled from "styled-components";
import Esquerda from './Esquerda';
import Direita from './Direita';


const paginaFragmentada = () => {
    return (
        <>
            <BlocoPrincipal>
                <Esquerda/>
                <Direita/>
            </BlocoPrincipal>
        </>
    );
}

export default paginaFragmentada;


const BlocoPrincipal = styled.div`
   border-bottom: 1px solid #ddd;
    padding: 30px 0px;
    display: flex;
`;

