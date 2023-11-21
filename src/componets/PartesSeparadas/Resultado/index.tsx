import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { mega } from "../../../styles/themes"

interface Props {
  dezenas: any[];
  theme: any;
}

function Resultado(props: Props) {
  const { dezenas, theme } = props;

  if (!dezenas || dezenas.length === 0) {
    return <div>Nenhuma dezena disponível</div>;
  }

  return (
    <>
      <LinhaBola theme={theme}>
        {dezenas.map((dezena, index) => (
          <Bola key={index} theme={theme}>
            <BolaTexto theme={theme}>{dezena}</BolaTexto>
          </Bola>
        ))}
      </LinhaBola>
    </>
  );
}

const Index = () => {
  const { megasena } = useContexto();
  const theme = mega;

  if (!megasena || !megasena.dezenas || megasena.dezenas.length === 0) {
    return <div>Nenhuma dezena disponível</div>;
  }

  return <Resultado dezenas={megasena.dezenas} theme={theme} />;
};

const LinhaBola = styled.div`
  display: flex;
`;

const Bola = styled.div`
  margin: 0px 10px;
  padding: 10px;
  border-radius: 5.2rem;
  background-color: ${(props) => props.theme.bola};
  width: 2vw;
  height: 2vw;
`;

const BolaTexto = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.bolafonte};
  width: 2vw;
  height: 2vw;
  text-align: center;
`;

export default Index;
