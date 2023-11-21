import useContexto from "../../../hooks/useContexto";
import { MegaBlocoPrincipal, MegaBlocoEsquerda,MegaBlocoEstimativa, MegaTextoEstimativa, MegaValorEstimativa, MegaBlocoDireita, MegaLinhaBola, MegaBola, MegaTextoAcumulou, MegaDataConcurso, MegaNome, MegaBloco } from './style'; // Importe seus estilos aqui
import trevo from '../../../assets/trevo-timemania.png';
import Navbar from "../../Navbar";

function TimemaniaCompleta() {
  const { timemania } = useContexto();

  return (
    <>
      {timemania.dataApuracao ? (
        <MegaBlocoPrincipal>
          <MegaBlocoEsquerda>
            <MegaBloco>
              <img src={trevo} alt="Trevo Timemania" />
              <MegaNome>Timemania</MegaNome>
            </MegaBloco>

            <MegaBlocoEstimativa>
              <MegaTextoEstimativa>
                Estimativa de prêmio do próximo sorteio em {timemania.dataProximoConcurso}
              </MegaTextoEstimativa>

              <MegaValorEstimativa>
                {timemania.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </MegaValorEstimativa>
            </MegaBlocoEstimativa>
          </MegaBlocoEsquerda>

          <MegaBlocoDireita>
            <MegaLinhaBola>
              {timemania.dezenas.map((dezena, index) => (
                <MegaBola key={index}>{dezena}</MegaBola>
              ))}
            </MegaLinhaBola>

            <MegaTextoAcumulou>
              {timemania.quantidadeGanhadores === 0 ? 'ACUMULOU!' : `${timemania.quantidadeGanhadores} GANHADORES`}
            </MegaTextoAcumulou>

            <MegaDataConcurso>
              Concurso {timemania.numeroDoConcurso} - {timemania.dataPorExtenso}
            </MegaDataConcurso>
          </MegaBlocoDireita>
        </MegaBlocoPrincipal>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
}

export default TimemaniaCompleta;
