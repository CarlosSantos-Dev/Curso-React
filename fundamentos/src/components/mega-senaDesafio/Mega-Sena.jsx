import React, { Component } from "react"

import Botao from "./Botao"
import Exibir from "./Exibir"

export default class MegaSena extends Component {

    state = {
        numeros: []
    }

    gerarNumeros = () => {

        // Limpa o array caso tenha algum valor nele.
        while(this.state.numeros.length !== 0) {
            this.setState({
                numeros: this.state.numeros.pop()
            })
        }

        // Gerador.
        while(this.state.numeros.length !== 6) {
            // Gera um número aleatório entre 1 e 60.
            let num = Number(Math.floor(Math.random() * 59 + 1))

            // Verifica se o número está no array, se não estiver, o valor é adicionado.
            if(!this.state.numeros.includes(num)) {
                this.setState({
                    numeros: this.state.numeros.push(num)
                })

            }
        }
    }

    render() {
        return (
            <div>
                <h2>Mega-Sena</h2>

                <Botao gerar={this.gerarNumeros}></Botao>
                <Exibir numeros={this.state.numeros}></Exibir>
            </div>
        )
    }
}

/* Falhei miseravelmente... 😭

Eu consegui gerar os números, porém, quando tento gerar um novo array de números, é retornado um erro:

"TypeError: this.state.numeros.pop is not a function"

Mesmo se eu remover esta linha, no próximo "this.state.numeros.X" vai retornar-me o mesmo problema.

Fiquei horas tentando resolver, porém, sem sucesso... Tentei usar ".map()", ".filter()", e mais um monte de gambiarras.

Sem sucesso... */

/* Depois de eu ver na resolução, ele usa componente baseado em função, podendo usar o useState.

Eu estava em dúvida em usar componente baseado em função ou baseado em classe, mas não sabia a diferença. Vou pesquisar mais sobre esta diferença!

Bem, mesmo depois de ter pesquisado, eu não entendi muito bem a diferença, só vi que ao invés de usar o state em funções, é usado o useState...

Mas acredito que com a prática eu consiga diferenciar os dois e usar o mais apropriado para cada ocasião. */