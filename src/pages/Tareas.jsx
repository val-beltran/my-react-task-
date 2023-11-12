import "../App.css";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import Footer from "../components/Footer";
import { useToDo } from "../../hooks/useToDo";

function Tareas(){
    const {
        list,
        pendingToDo,
        completedToDo,
        addTask,
        onDeleteItem,
        onEditTask,
        onCompleted,
        onDeleteList,
    } = useToDo();

    return(
        <div className="mainBox">
            <Header />
            <TaskForm addTask={addTask} />
            <TaskList
            list={list}
            onCompleted={onCompleted}
            onDeleteItem={onDeleteItem}
            onEditTask={onEditTask}
            />
            <Footer
            onDeleteList={onDeleteList}
            pendingToDo={pendingToDo}
            completedToDo={completedToDo}
            />
        </div>
    );
}

export default Tareas;