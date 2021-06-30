
function Button({ handleClick, placeholder = "" }) {
    return (
        <div>
            <button onClick={handleClick}>{placeholder}</button>
        </div>
    )
}

export default Button
