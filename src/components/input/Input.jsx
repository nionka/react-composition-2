/**
 * Поле ввода поиска
 */

function Input() {
    return (
        <form className="form">
            <input placeholder="Ведите ваш запрос"></input>
            <button type="submit">поиск</button>
        </form>
    )
}

export default Input