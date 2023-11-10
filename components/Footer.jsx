export default function Footer(props) {
    const { onDeleteList, pendingToDo } = props;

    function handleClearClick() {
        onDeleteList();
    }

    return (
        <div className="footer">
            <p>Tu tienes {pendingToDo} pendiente estas tareas</p>
            <button className="buttonClear" onClick={handleClearClick}>
                Clear All
            </button>
        </div>
    );
}