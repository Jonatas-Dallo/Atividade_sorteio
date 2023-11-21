import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { megaTheme, quinaTheme, timemaniaTheme } from "../../../styles/themes";
import { useLocation } from "react-router-dom";

interface Props {
  theme: any;
  numero: any;
  dataExtenso: any;
}

function Data(props: Props) {
  return (
    <>
      <DataT theme={props.theme}>
        Concurso {props.numero} - {props.dataExtenso}
      </DataT>
    </>
  );
}

const Index = () => {
  const location = useLocation();
  const { megasena, quina, timemania } = useContexto();

  let theme: any;
  let numeroConcurso: any;
  let dataExtenso: any;

  switch (location.pathname) {
    case "/Mega":
      theme = megaTheme;
      numeroConcurso = megasena.numeroDoConcurso;
      dataExtenso = megasena.dataPorExtenso;
      break;
    case "/Quina":
      theme = quinaTheme;
      numeroConcurso = quina.numeroDoConcurso;
      dataExtenso = quina.dataPorExtenso;
      break;
    case "/Timemania":
      theme = timemaniaTheme;
      numeroConcurso = timemania.numeroDoConcurso;
      dataExtenso = timemania.dataPorExtenso;
      break;
    default:
      theme = megaTheme;
      numeroConcurso = megasena.numeroDoConcurso;
      dataExtenso = megasena.dataPorExtenso;
      break;
  }

  return (
    <>
      <Data numero={numeroConcurso} dataExtenso={dataExtenso} theme={theme} />
    </>
  );
};

const DataT = styled.div`
  padding-left: 10px;
  margin-top: 15px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.data};
`;

export default Index;
