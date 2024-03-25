import { useContext } from "react";

import { Neto } from "./ComponenteNeto";
import { Imagem } from "./Imagem";
import { contador } from "./ComponenteAvo";

export const Filho = () => {
    const id = useContext(contador)

    return (
        <div>
            <h1>Filho:</h1>
            <Imagem id={id + 1}/>
            <Neto/>
        </div>
    )
}