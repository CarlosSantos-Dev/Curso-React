export default function (props) {
    if(props.test) {
        return props.children
    } else {
        return false
    }
}

// Por mais que este componente seja JSX não é necessário importar o React porque não tem código JSX no mesmo.