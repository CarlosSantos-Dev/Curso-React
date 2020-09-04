import React from "react"

export default props =>
    <div>
        <h2>Os Filhos:</h2>
        <div>
            {props.children}
        </div>
    </div>

// Para trabalhar com os filhos do componente é por meio do comando "props.children".