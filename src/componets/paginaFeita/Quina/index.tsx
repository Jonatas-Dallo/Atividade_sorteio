import useContexto from "../../../hooks/useContexto";
import { MegaBlocoPrincipal, MegaBlocoEsquerda,MegaBlocoEstimativa, MegaTextoEstimativa, MegaValorEstimativa, MegaBlocoDireita, MegaLinhaBola, MegaBola, MegaTextoAcumulou, MegaDataConcurso, MegaNome, MegaBloco } from './style'; // Importe seus estilos aqui
import trevo from '../../../assets/trevo-quina.png';
import Navbar from "../../Navbar";

function QuinaCompleta() {
  const { quina } = useContexto();

  return (
    <>
      {quina.dataApuracao ? (
        <MegaBlocoPrincipal>
          <MegaBlocoEsquerda>
            <MegaBloco>
              <img src={trevo} alt="Trevo Mega-Sena" />
              <MegaNome>QUINA</MegaNome>
            </MegaBloco>

            <MegaBlocoEstimativa>
              <MegaTextoEstimativa>
                Estimativa de prêmio do próximo sorteio em {quina.dataProximoConcurso}
              </MegaTextoEstimativa>

              <MegaValorEstimativa>
                {quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </MegaValorEstimativa>
            </MegaBlocoEstimativa>
          </MegaBlocoEsquerda>

          <MegaBlocoDireita>
            <MegaLinhaBola>
              {quina.dezenas.map((dezena, index) => (
                <MegaBola key={index}>{dezena}</MegaBola>
              ))}
            </MegaLinhaBola>

            <MegaTextoAcumulou>
              {quina.quantidadeGanhadores === 0 ? 'ACUMULOU!' : `${quina.quantidadeGanhadores} GANHADORES`}
            </MegaTextoAcumulou>

            <MegaDataConcurso>
              Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
            </MegaDataConcurso>
          </MegaBlocoDireita>
        </MegaBlocoPrincipal>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
}

export default QuinaCompleta;
