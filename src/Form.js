import "./Form.css"

function Form({setInputText, todos, setTodos, inputText}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, {text:inputText, completed:false, id: Math.random() * 1000}])
        setInputText("")
    }

    const handleChange = (e) => {
        setInputText(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form className="form"
              onSubmit={handleSubmit}>
            <input className="input"
                   value={inputText}
                   type="text"
                   onChange={handleChange}
                   onKeyDown={handleKeyPress}
                   placeholder="What needs to be done?"/>
        </form>

    )
}

export default Form;