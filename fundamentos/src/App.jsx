import React from "react"

import "./App.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import ComFilhos from "./components/basicos/ComFilhos"
import Repeticao from "./components/basicos/Repeticao"
import Condicional from "./components/basicos/Condicional"
import CondicionalComIf from "./components/basicos/CondicionalComIf"
import Pai from "./components/comunicacao/direta/Pai"
import Super from "./components/comunicacao/indireta/Super"
import Input from "./components/form/Input"
import Contador from "./components/contador/Contador"
import MyContador from "./components/contadorDesafio/MyContador"
import ContadorResolucao from "./components/contadorResolucao/Contador"
import MegaSena from "./components/mega-senaDesafio/Mega-Sena"
import MegaSenaResolucao from "./components/mega-senaResolucao/Mega-Sena"

import Card from "./components/layout/Card"

export default (props) => (
    <div className="App">
        <h1>Fundamentos ReactJS</h1>

        <div className="Cards">
            <Card title="#01 - Primeiro componente" color="#fa6900">
                <Primeiro/>
            </Card>

            <Card title="#02 - Componente com parâmetros" color="#008bba">
                <ComParametro title="Este é o título." subtitle="Este é o subtítulo."/>    
                <ComParametro title="Opa!" subtitle="Epa!"/>
            </Card>

            <Card title="#03 - Componente com filhos" color="#e94c6f">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos> {/* Se quisermos ter um componente com filhos, é necessário ter um corpo. Então, é necessário ter a tag de abertura e fechamento. */}
            </Card>

            <Card title="#04 - Repetição" color="#d96459">
                <Repeticao/>
            </Card>

            <Card title="#05 - Condicional v1" color="#ff85cb">
                <Condicional number={10}></Condicional>
            </Card>

            <Card title="#06 - Condicional v2" color="#92b06a">
                <CondicionalComIf number={10}></CondicionalComIf>
            </Card>

            <Card title="#07 - Comunicação direta" color="#000">
                <Pai sobrenome="Freitas"></Pai>
            </Card>

            <Card title="#08 - Comunicação indireta" color="#4298b5">
                <Super></Super>
            </Card>

            <Card title="#09 - Input" color="#9c0f5f">
                <Input></Input>
            </Card>

            <Card title="#10 - Contador (s/ componentização)" color="#293e6a">
                <Contador passo={10} valor={100}></Contador>
            </Card>

            <Card title="#10 - Contador (desafio c/ componentização)" color="#f20">
                <MyContador passo={10} valor={100}></MyContador>
            </Card>

            <Card title="#10 - Contador (resolução c/ componentização)" color="#fa0">
                <ContadorResolucao passo={10} valor={100}></ContadorResolucao>
            </Card>

            <Card title="#11 - Mega-Sena (desafio)" color="#f20">
                <MegaSena></MegaSena>
            </Card>

            <Card title="#11 - Mega-Sena (resolução)" color="#fa0">
                <MegaSenaResolucao qtdeNumero={8}></MegaSenaResolucao>
            </Card>
        </div>
    </div>
)