import React from "react";
import styled from "styled-components";
import useContexto from "../../../hooks/useContexto";
import { megaTheme, quinaTheme, timemaniaTheme } from "../../../styles/themes";
import { useLocation } from "react-router-dom";

interface Props {
  theme: any;
}

function Resultado(props: Props) {
  const { theme } = props;
  const { megasena, quina, timemania } = useContexto();

  let dezenas: any[] = [];

  switch (theme) {
    case megaTheme:
      dezenas = megasena ? megasena.dezenas : [];
      break;
    case quinaTheme:
      dezenas = quina ? quina.dezenas : [];
      break;
    case timemaniaTheme:
      dezenas = timemania ? timemania.dezenas : [];
      break;
    default:
      break;
  }

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
  const location = useLocation();

  let theme: any;

  switch (location.pathname) {
    case "/Mega":
      theme = megaTheme;
      break;
    case "/Quina":
      theme = quinaTheme;
      break;
    case "/Timemania":
      theme = timemaniaTheme;
      break;
    default:
      theme = megaTheme;
      break;
  }

  return <Resultado theme={theme} />;
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
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.bolafonte};
  width: 2vw;
  height: 2vw;
  text-align: center;
`;

export default Index;
