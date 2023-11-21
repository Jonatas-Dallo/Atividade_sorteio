import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { megaTheme, quinaTheme, timemaniaTheme } from "../../../styles/themes";
import { useLocation } from "react-router-dom";

interface Props {
  theme: any;
  texto: any;
  valor: any;
}

function Estimativa(props: Props) {
  return (
    <>
      <BlocoEstimativa>
        <TextoEstimativa theme={props.theme}>
          Estimativa de prêmio do próximo sorteio em: {props.texto}
        </TextoEstimativa>
        <ValorEstimativa theme={props.theme}>{props.valor}</ValorEstimativa>
      </BlocoEstimativa>
    </>
  );
}

const Index = () => {
  const { megasena, quina, timemania } = useContexto();
  const location = useLocation();

  let theme: any;
  let estimativaText: string;
  let valorEstimado: string;

  switch (location.pathname) {
    case "/Mega":
      theme = megaTheme;
      estimativaText = megasena.dataProximoConcurso
      valorEstimado = megasena.valorEstimadoProximoConcurso
        ? megasena.valorEstimadoProximoConcurso.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : "Valor Indisponível";
      break;
    case "/Quina":
      theme = quinaTheme;
      estimativaText = quina.dataProximoConcurso
      valorEstimado = quina.valorEstimadoProximoConcurso
        ? quina.valorEstimadoProximoConcurso.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : "Valor Indisponível";
      break;
    case "/Timemania":
      theme = timemaniaTheme;
      estimativaText = timemania.dataProximoConcurso
      valorEstimado = timemania.valorEstimadoProximoConcurso
        ? timemania.valorEstimadoProximoConcurso.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : "Valor Indisponível";
      break;
    default:
      theme = megaTheme;
      estimativaText = megasena.dataProximoConcurso
      valorEstimado = megasena.valorEstimadoProximoConcurso
        ? megasena.valorEstimadoProximoConcurso.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
        : "Valor Indisponível";
      break;
  }

  return (
    <>
      <Estimativa theme={theme} valor={valorEstimado} texto={estimativaText} />
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
