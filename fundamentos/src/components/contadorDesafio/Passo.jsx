import React from "react"

import "./Passo.css"

export default props => {
    function passarValor(valor) {
        props.pegarPasso(valor)
    }

    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="number" value={props.passo}
              onChange={e => passarValor(+e.target.value)}/>
        </div>
    )
}

/* Analizando o meu código depois de ter visto a resolução, eu percebi que a função "passarValor" pode ser removida, e que no lugar onde estou a chamando era só substituir por "props.pegarPasso(+e.target.value)".

Mesmo que isso não mude nada tecnicamente. */