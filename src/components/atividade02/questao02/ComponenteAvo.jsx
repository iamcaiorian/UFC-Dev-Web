import { createContext } from "react";

import { Imagem } from "./Imagem";
import { Filho } from "./ComponenteFilho";

export const contador = createContext(1)

export const Avo = () => {
    const numero = 1

    return (
        <div>
            <h1>Avô:</h1>
            <Imagem id={numero}/>
            <contador.Provider value={numero}>
                <Filho/>
            </contador.Provider>
        </div>
    )
}