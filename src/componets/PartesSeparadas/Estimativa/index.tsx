import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { mega } from "../../../styles/themes"

interface Props {
    theme: any;
    texto: any;
    valor: any;
}

function Estimativa(props: Props) {
    return (
        <>
            <BlocoEstimativa>
                <TextoEstimativa theme={props.theme}>Estimativa de premio do próximo sorteio em: {props.texto}</TextoEstimativa>
                <ValorEstimativa theme={props.theme}>{props.valor}</ValorEstimativa>
            </BlocoEstimativa>
        </>
    );
}

const Index = () => {
    const { megasena } = useContexto();
    const { quina } = useContexto();
    const theme = mega;
    const valorFormatado =
        megasena && megasena.valorEstimadoProximoConcurso
            ? `${megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}`
            : "Valor Indisponível"; // Caso o valor não esteja disponível, exiba uma mensagem padrão


    return (
        <>
            <Estimativa theme={theme} valor={valorFormatado} texto={megasena.dataProximoConcurso} />
        </>
    );
};

const BlocoEstimativa = styled.div`
  width: 15rem;
  margin-left: 45px;
  margin-top: 20px;
`;

const TextoEstimativa = styled.div`
  font-size: 0.9rem;
  color: #4c556c;   
`;

const ValorEstimativa = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 15px;
  color: ${(props) => props.theme.estimativa};
`;

export default Index;
