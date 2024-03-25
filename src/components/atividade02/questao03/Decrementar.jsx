import { useContext } from "react"
import { ContadorContexto } from "./ContadorContexto"

export const Decrementar = () => {

    const { id, setId } = useContext(ContadorContexto)

    function decrementar() {
        if (id > 1) {
            setId(id => id - 1)
        }
    }

    return (
        <div>
            <button
                onClick={
                    decrementar
                }
            >
                Decrementar
            </button>
        </div>
    )
}