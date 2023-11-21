import React from "react";
import styled from "styled-components";
import { mega, quina, timemania } from "../../../styles/themes";
import trevoT from "../../../assets/trevo-timemania.png";
import trevoM from "../../../assets/trevo-megasena.png";
import trevoQ from "../../../assets/trevo-quina.png";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  theme: any;
  nome: string;
  trevo: string;
}

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

  let theme;
  let trevo;

  switch (location.pathname) {
    case "/Mega":
      theme = mega;
      trevo = trevoM;
      break;
    case "/Quina":
      theme = quina;
      trevo = trevoQ;
      break;
    case "/Timemania":
      theme = timemania;
      trevo = trevoT;
      break;
    default:
      // Caso padrão, pode ser o tema que desejar
      theme = mega;
      trevo = trevoM;
      break;
  }

  return (
    <>
      <Container>
        <LoteriaNome nome="Mega Sena" theme={theme} trevo={trevo} />
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
