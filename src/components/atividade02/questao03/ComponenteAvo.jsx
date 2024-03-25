import { Imagem } from "./Imagem";
import { Filho } from "./ComponenteFilho";
import { ContadorContexto } from "./ContadorContexto";
import { useState } from "react";
import { Incrementar } from "./Incrementar";
import { Decrementar } from "./Decrementar";

export const Avo2 = () => {
    const [id, setId] = useState(1) 

    return (
        <div>
            <h1>Avô:</h1>
            <Imagem id={id}/>
            <ContadorContexto.Provider value={{id, setId}}>
                <Filho />
                <Incrementar />
                <Decrementar />
            </ContadorContexto.Provider>
        </div>
    )
}