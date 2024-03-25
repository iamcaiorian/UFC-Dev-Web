import { useContext } from "react"

import { ContadorContexto } from "./ContadorContexto"
import { Imagem } from "./Imagem"

export const Neto = () => {
    const { id } = useContext(ContadorContexto)

    return (
        <div>
            <h1>Neto:</h1>
            <Imagem id={id + 2} />
        </div>
    )
}