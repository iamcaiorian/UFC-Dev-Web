import { useContext } from "react"

import { contador } from "./ComponenteAvo"
import { Imagem } from "./Imagem"

export const Neto = () => {
    const id = useContext(contador)

    return (
        <div>
            <h1>Neto:</h1>
            <Imagem id={id + 2}/>
        </div>
    )
}