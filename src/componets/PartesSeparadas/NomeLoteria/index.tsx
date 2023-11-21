import React from "react";
import styled from "styled-components";
import { megaTheme, quinaTheme, timemaniaTheme } from "../../../styles/themes";
import trevoT from "../../../assets/trevo-timemania.png";
import trevoM from "../../../assets/trevo-megasena.png";
import trevoQ from "../../../assets/trevo-quina.png";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  theme: any;
  nome: string;
  trevo: string;
}

var nome = "";

function LoteriaNome(props: Props) {
  return (
    <>
      <img src={props.trevo} alt="" />
      <NomeLote theme={props.theme}>{props.nome}</NomeLote>
    </>
  );
}

const Index = () => {

  const location = useLocation();
  const navigate = useNavigate();

  let theme: any;
  let trevo: any;

  switch (location.pathname) {
    case "/Mega":
      theme = megaTheme;
      trevo = trevoM;
      nome = "Megasena";
      break;
    case "/Quina":
      theme = quinaTheme;
      trevo = trevoQ;
      nome = "Quina";
      break;
    case "/Timemania":
      theme = timemaniaTheme;
      trevo = trevoT;
      nome = "Timemania";
      break;
    default:
      theme = megaTheme;
      trevo = trevoM;
      break;
  }

  return (
    <>
      <Container>
        <LoteriaNome nome={nome} theme={theme} trevo={trevo} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display:flex
`;

const NomeLote = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 10px;
  color: ${(props) => props.theme.loteria};
`;

export default Index;
