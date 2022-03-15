import './Button.css'

function Button(props) {

    const { children, test, ...rest } = props

    return (
        <button { ...rest }>{ children }</button>
    )
}

export default Button