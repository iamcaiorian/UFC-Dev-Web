import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"
import FunctionContextD from "./FunctionContextD"

import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {
    const cores = { bkgA: 'green', bkgB: 'white', bkgC: 'yellow', bkgD: 'blue' }
    
    return ( 
        <>
            <div style={{ backgroundColor: "grey" }}>
                <h1 style={{ backgroundColor: cores.bkgA }}>Contexto A</h1>
                <ColorTheme.Provider value={cores}>
                    <FunctionContextB />
                    <FunctionContextC />
                    <FunctionContextD />
                </ColorTheme.Provider>
            </div>
        </>
    )
}

export default FunctionContextA