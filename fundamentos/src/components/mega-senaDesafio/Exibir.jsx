import React from "react"

export default props => {

    /* Tentativa falha:
    function mostrar() {
        for(let i = 0; i < props.numeros.length; i++) {
            return (<div>{props.numeros[i]}</div>)
        }
    } */

    return (
        <div>
            <h4>Os números gerados são: {/*{mostrar}*/}</h4>
        </div>
    )
}

/* Não consegui fazer uma maneira de mostrar os valores... 

Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.

Não sei como resolver isso...

E os números passados quando dou um console.log(), retorna "6". 😕 */