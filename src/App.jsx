import React from 'react'
import { MeusDados1 } from './components/atividade00/01MeusDados'
import { MeusDados2 } from './components/atividade00/02MeusDados'
import { Temperatura } from './components/atividade00/03Temperatura'

export function App() {
  return (
    <>
      <div>
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
      </div>
    </>
  )
}
