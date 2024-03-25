import { useContext } from "react";

import { Neto } from "./ComponenteNeto";
import { Imagem } from "./Imagem";
import { ContadorContexto } from "./ContadorContexto";

export const Filho = () => {
    const { id } = useContext(ContadorContexto)

    return (
        <div>
            <h1>Filho:</h1>
            <Imagem id={id + 1} />
            <Neto />
        </div>
    )
}