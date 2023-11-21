import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { mega } from "../../../styles/themes"

interface Props {
  theme: any; // ajuste conforme necessário
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
  const { megasena, quina, timemania} = useContexto();
  const theme = mega;

  return (
    <>
      <Data numero={megasena.numeroDoConcurso} dataExtenso={megasena.dataPorExtenso} theme={theme} />
    </>
  );
};

const DataT = styled.div`
  padding-left: 10px;
  margin-top: 15px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.data}; // Corrigido para acessar a propriedade correta do tema
`;

export default Index;
