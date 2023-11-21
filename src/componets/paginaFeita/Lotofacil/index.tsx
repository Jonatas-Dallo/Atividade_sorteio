import React from 'react';
import useContexto from "../../../hooks/useContexto";
import trevo from '../../../assets/trevo-lotofacil.png';
import {
  LotoBlocoPrincipal, LotoBloco, LotoNome, LotoBlocoEstimativa, LotoTextoEstimativa, LotoValorEstimativa, LotoBlocoDireito, LotoLinhaGanhadores, LotoGanhadores, LotoTextoGanhadores, LotoDataConcurso,
} from './style';

function LotofacilCompleta() {
  const { lotofacil } = useContexto();
  let lista1 = [];
  let lista2 = [];
  let lista3 = [];
  if (lotofacil.dataApuracao) {
    for (let i = 0; i < 5; i++) {
      lista1.push(lotofacil.dezenas[i]);
    }

    for (let i = 5; i < 10; i++) {
      lista2.push(lotofacil.dezenas[i]);
    }

    for (let i = 10; i < 15; i++) {
      lista3.push(lotofacil.dezenas[i]);
    }
  }

  console.log(lotofacil);
  return (
    <>
      {lotofacil.dataApuracao ? (
        <LotoBlocoPrincipal>
          <div id="loto-bloco-esquerdo">
            <LotoBloco>
              <img src={trevo} alt="Trevo" />
              <LotoNome>LOTOFÁCIL</LotoNome>
            </LotoBloco>
            <LotoBlocoEstimativa>
              <LotoTextoEstimativa>
                Estimativa de prêmio do próximo sorteio em {lotofacil.dataProximoConcurso}
              </LotoTextoEstimativa>
              <LotoValorEstimativa>
                {lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </LotoValorEstimativa>
            </LotoBlocoEstimativa>
          </div>
          <LotoBlocoDireito>
            <div id="ganhadores">
              <LotoLinhaGanhadores>
                {lista1.map((dezena, index) => (
                  <LotoGanhadores key={index}>{dezena}</LotoGanhadores>
                ))}
              </LotoLinhaGanhadores>
              <LotoLinhaGanhadores>
                {lista2.map((dezena, index) => (
                  <LotoGanhadores key={index}>{dezena}</LotoGanhadores>
                ))}
              </LotoLinhaGanhadores>
              <LotoLinhaGanhadores>
                {lista3.map((dezena, index) => (
                  <LotoGanhadores key={index}>{dezena}</LotoGanhadores>
                ))}
              </LotoLinhaGanhadores>
            </div>
            <LotoTextoGanhadores>
              {lotofacil.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${lotofacil.quantidadeGanhadores} GANHADORES`}
            </LotoTextoGanhadores>
            <LotoDataConcurso>
              Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
            </LotoDataConcurso>
          </LotoBlocoDireito>
        </LotoBlocoPrincipal>
      ) : (
        <div>
          Carregando...
        </div>
      )}
    </>
  );
}

export default LotofacilCompleta;
