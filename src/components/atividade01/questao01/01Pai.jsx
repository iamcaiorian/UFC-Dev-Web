import React from 'react';
import { Filho } from './01Filho';
import './01style.css';

export const Pai = () => {
    return (
        <div className="container">
            <h1>IMC:</h1>
            <Filho altura={1.8} peso={90} />
            <Filho altura={1.6} peso={60} />
            <Filho altura={1.7} peso={50} />
        </div>
    );
};
