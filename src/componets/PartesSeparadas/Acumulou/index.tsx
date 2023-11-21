import React from "react";
import { type } from "os";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { mega } from "../../../styles/themes"


interface Props {
    theme: any; // ajuste conforme necessário
    texto: any;
}



function Acumulou(props: Props) {
    const { megasena } = useContexto();


    return (
        <>
            <TextoAcumulou theme={props.theme}>
                {megasena.quantidadeGanhadores === 0 ?
                    "ACUMULOU!"
                    :
                    `${megasena.quantidadeGanhadores} Ganhadores`}

            </TextoAcumulou>

        </>
    );
}

const Index = () => {
    const { megasena } = useContexto();
    const theme = mega;

    return (
        <>
            <Acumulou texto={megasena.quantidadeGanhadores} theme={theme} />
        </>
    )
};

const TextoAcumulou = styled.div`
    padding-left: 10px;
    margin-top: 15px;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${(props) => props.theme?.acumulou};
`

export default Index;
