import React from 'react';
import './01style.css';

export const Filho = ({ altura, peso }) => {

    function calcularIMC(altura, peso) {
        return peso / (altura * altura);
    }

    function classificacaoIMC(imc) {
        if (imc < 18) {
            return <h3>Classificação: <span className='classificacaoAbaixo'>Abaixo do peso</span></h3>
        } else if (imc > 25) {
            return <h3>Classificação: <span className='classificacaoAcima'>Acima do peso</span></h3>
        }

        return <h3>Classificação: <span className='classificacaoIdeal'>Peso ideal</span></h3>
    }

    const imc = calcularIMC(altura, peso);

    return (
        <div className="info">
            <h3>Altura: {altura}</h3>
            <h3>Peso: {peso}</h3>
            <h3 className="imc">IMC: {imc.toFixed(2)}</h3>
            {classificacaoIMC(imc)}
        </div>
    );
};
