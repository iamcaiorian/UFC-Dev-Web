import React, { Children, cloneElement } from 'react';
import './03style.css';

export const Hero = ({name, imagem, arena}) => {
    return (
        <div className="hero-info">
            <h1>Herói:</h1>
            <h2>Arena: {arena}</h2>
            <h2>Nome: {name}</h2>
            <img src={imagem} alt={name} className='img-container' />
        </div>
    )
}

export const Enemy = ({name, imagem, arena}) => {
  return (
      <div className="enemy-info">
          <h1>Enemy:</h1>
          <h2>Arena: {arena}</h2>
          <h2>Nome: {name}</h2>
          <img src={imagem} alt={name} className='img-container' />
      </div>
  )
}

export const Arena = ({arena, children}) => {
  return (
    <div className="info-container">
      <h1>Arena: {arena}</h1>
      {Children.map(children, child => {
        return cloneElement(child, {arena})
      })}
    </div>
  )
}

export function World({ children }) {
  return (
    <div className='container03'>
      <h1>Batalhas:</h1>
      <div className="container03">{children}</div>
    </div>
  )
}
