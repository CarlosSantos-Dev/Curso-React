import React, { useState } from "react"
import Sub from "./Sub"

export default (props) => {
    const [texto, setTexto] = useState("Valor")
    const [num, setNum] = useState(0)

    function qndClicar(valorGerado, txt) {
        setNum(valorGerado)
        setTexto(txt)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub quandoClicar={qndClicar}></Sub>
        </div>
    )
}