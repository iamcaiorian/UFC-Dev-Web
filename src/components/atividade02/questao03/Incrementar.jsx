import { useContext } from "react"
import { ContadorContexto } from "./ContadorContexto"

export const Incrementar = () => {

    const { id, setId } = useContext(ContadorContexto)

    function incrementar() {
        if (id < 1124) {
            setId(id => id + 1)
        }
    }

    return (
        <div>
            <button
                onClick={
                    incrementar
                }
            >
                Incrementar
            </button>
        </div>
    )
}