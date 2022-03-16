import './Button.css'

function Button(props) {

    let { children, className, ...rest } = props

    className = 'btn' + (className ? ' ' + className : '')

    return (
        <button className={className} { ...rest }>{ children }</button>
    )
}

export default Button