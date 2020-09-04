import React, { Component } from "react"

import Passo from "./Passo"
import Display from "./Display"
import Buttons from "./Buttons"

export default class MyContador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    getPasso = (passoVal) => {
        this.setState({ passo: passoVal })
    }

    getValor = (val) => {
        this.setState({ valor: val })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>

                <Passo passo={this.state.passo} pegarPasso={this.getPasso}></Passo>
                <Display valor={this.state.valor}></Display>
                <Buttons valor={this.state.valor} passo={this.state.passo} pegarValor={this.getValor}></Buttons>

            </div>
        )
    }
}

// Analizando o meu código, percebi que preciso escolher nomes melhores para funções, parâmetros e variáveis... 😅