import React from "react"

export default props =>
    <>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
    </>

// "props" recebe os parâmetros passados na instância deste componente e podemos instanciá-lo várias vezes passando parâmetros diferentes ou iguais; este nome é um padrão usado pelos programadores.

/* Se eu quiser mudar o valor de uma propriedade não vai dar certo.

    props.title = "Outro título"

Não é possível fazer isso. "props" é somente leitura! */