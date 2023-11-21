import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { megaTheme, quinaTheme, timemaniaTheme } from "../../../styles/themes";
import { useLocation } from "react-router-dom";

interface Props {
  theme: any;
  texto: any;
}

function Acumulou(props: Props) {
  return (
    <>
      <TextoAcumulou theme={props.theme}>
        {props.texto === 0 ? "ACUMULOU!" : `${props.texto} Ganhadores`}
      </TextoAcumulou>
    </>
  );
}

const Index = () => {
  const location = useLocation();
  const { megasena, quina, timemania } = useContexto();

  let theme: any;
  let quantidadeGanhadores: any;

  switch (location.pathname) {
    case "/Mega":
      theme = megaTheme;
      quantidadeGanhadores = megasena.quantidadeGanhadores;
      break;
    case "/Quina":
      theme = quinaTheme;
      quantidadeGanhadores = quina.quantidadeGanhadores;
      break;
    case "/Timemania":
      theme = timemaniaTheme;
      quantidadeGanhadores = timemania.quantidadeGanhadores;
      break;
    default:
      theme = megaTheme;
      quantidadeGanhadores = megasena.quantidadeGanhadores;
      break;
  }

  return <Acumulou texto={quantidadeGanhadores} theme={theme} />;
};

const TextoAcumulou = styled.div`
  padding-left: 10px;
  margin-top: 15px;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme?.acumulou};
`;

export default Index;
