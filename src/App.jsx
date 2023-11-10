import "App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";

const todoList = [
  { id: 1, name: "Lavar los platos", completed: true },
  { id: 2, name: "Lavar los dientes", completed: false },
  { id: 3, name: "Planchar la ropa", completed: true },
];

function App() {
  return (
    <div className="mainBox">
      <Header />
      <TaskList list={todoList} />
      <span className="finalBox">
        <p className="finalText">Tu tienes 2 tareas pendientes</p>
        <button className="buttonClear">Borrar</button>
      </span>
    </div>
  );
}

export default App;