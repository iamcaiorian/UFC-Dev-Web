import React from 'react'
// import { MeusDados1 } from './components/atividade00/01MeusDados'
// import { MeusDados2 } from './components/atividade00/02MeusDados'
// import { Temperatura } from './components/atividade00/03Temperatura'

import { Pai } from './components/atividade01/questao01/01Pai'
import { MeuPC } from './components/atividade01/questao02/02MeuPC'
import { World, Arena, Hero, Enemy } from './components/atividade01/questao03/03Batalha'
import l from './assets/l.jpg'
import arminha from './assets/arminha.jpg'
import anaconda from './assets/anaconda.jpg'
import formigas from './assets/formigas.jpg'

export function App() {
  return (
    <>
      {/* atividade 00 */}
      {/* <div>
        <h1>Questão 1:</h1>
        <MeusDados1 />
        
        <h1>Questão 2:</h1>
        <MeusDados2 
          nome1 = {"Caio Rian Reinaldo de Sousa"}
          nome2 = {"Emanuel Araujo Lemos"}
          curso = {"Engenharia de Software"}
          instituicao = {"Universidade Federal do Ceará"}
        />

        <h1>Questão 3</h1>
        <Temperatura
          tempC = {0}
          tempF = {32}
          tempK = {273.15}
        />
      </div> */}
    
      {/* atividade 01 */}
      <div>
        <Pai />

        <br />

        <MeuPC />

        <br />

        <World>
          <Arena arena="Rio Amazonas">
            <Hero name="Anaconda" imagem={anaconda} />
            <Enemy name="1 milhão de formigas" imagem={formigas} />
          </Arena>
          <Arena arena="Brasil">
            <Hero name="Fazuele" imagem={l} />
            <Enemy name="Arminha" imagem={arminha} />
          </Arena>
        </World>
      </div>

    </>
  )
}
