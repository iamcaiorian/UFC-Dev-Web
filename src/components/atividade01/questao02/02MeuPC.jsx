import React from 'react';
import './02style.css';

export const PlacaMae = ({ nome, preco }) => {
    return (
      <div className="pc-info">
        <h2>Placa-Mãe</h2>
        <p>Nome: {nome}</p>
        <p>Preço: {preco}</p>
      </div>
    )
  }
  
  export const Memoria = ({ nome, preco }) => {
    return (
      <div className="pc-info">
        <h2>Memória</h2>
        <p>Nome: {nome}</p>
        <p>Preço: {preco}</p>
      </div>
    )
  }
  
  export const PlacaDeVideo = ({ nome, preco }) => {
    return (
      <div className="pc-info">
        <h2>Placa de Vídeo</h2>
        <p>Nome: {nome}</p>
        <p>Preço: {preco}</p>
      </div>
    )
  }

export const MeuPC = () => {
  return (
    <div className="container">
        <h1>Questão 2:</h1>
        <h2>Meu PC: </h2>
        <PlacaMae nome="Asus Prime B450M Gaming/BR" preco="R$ 600,00" />
        <Memoria nome="HyperX Fury 8GB" preco="R$ 400,00" />
        <PlacaDeVideo nome="Nvidia GeForce RTX 2060" preco="R$ 2.000,00" /> 
    </div>
  )
}
