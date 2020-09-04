import React from "react"

export default props => {

    function inc() {
        props.pegarValor(props.valor + props.passo)
    }

    function dec() {
        props.pegarValor(props.valor - props.passo)
    }

    return (
        <div>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

// Analizando o meu código depois de ter visto a resolução, ele ficaria mais organizado e, principalmente, mais limpo. Facilitaria muito mesmo ter feito da outra maneira. 