import useContexto from "../../../hooks/useContexto";
import { MegaBlocoPrincipal, MegaBlocoEsquerda, MegaBlocoEstimativa, MegaTextoEstimativa, MegaValorEstimativa, MegaBlocoDireita, MegaLinhaBola, MegaBola, MegaTextoAcumulou, MegaDataConcurso, MegaNome, MegaBloco } from './style'; // Importe seus estilos aqui
import trevo from '../../../assets/trevo-megasena.png';
import Navbar from "../../Navbar";

function MegasenaCompleta() {
  const { megasena } = useContexto();

  return (
    <>
      {megasena.dataApuracao ? (
        <MegaBlocoPrincipal>
          <MegaBlocoEsquerda>
            <MegaBloco>
              <img src={trevo} alt="Trevo Mega-Sena" />
              <MegaNome>Mega-Sena</MegaNome>
            </MegaBloco>

            <MegaBlocoEstimativa>
              <MegaTextoEstimativa>
                Estimativa de prêmio do próximo sorteio em {megasena.dataProximoConcurso}
              </MegaTextoEstimativa>

              <MegaValorEstimativa>
                {megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </MegaValorEstimativa>
            </MegaBlocoEstimativa>
          </MegaBlocoEsquerda>

          <MegaBlocoDireita>
            <MegaLinhaBola>
              {megasena.dezenas.map((dezena, index) => (
                <MegaBola key={index}>{dezena}</MegaBola>
              ))}
            </MegaLinhaBola>

            <MegaTextoAcumulou>
              {megasena.quantidadeGanhadores === 0 ? 'ACUMULOU!' : `${megasena.quantidadeGanhadores} GANHADORES`}
            </MegaTextoAcumulou>

            <MegaDataConcurso>
              Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
            </MegaDataConcurso>
          </MegaBlocoDireita>
        </MegaBlocoPrincipal>
      ) : (
        <div>Carregando...</div>
      )}
    </>
  );
}

export default MegasenaCompleta;
