import "../App.css";
import Header from "../Components/Header";
import TaskList from "../Components/TaskList";
import TaskForm from "../Components/TaskForm";
import Footer from "../Components/Footer";
import { useToDo } from "../hooks/useToDo";
import { Flex } from "@chakra-ui/react";

function Tareas() {
    const {
        list,
        pendingToDo,
        addTask,
        onDeleteItem,
        onEditTask,
        onCompleted,
        onDeleteList,
    } = useToDo();

    return (
        <Flex alignItems={"center"} justifyContent={"center"}>
            <div className="mainBox">
                <Header />
                <TaskForm addTask={addTask} />
                <TaskList>
                    list={list}
                    onCompleted={onCompleted}
                    onEditTask={onEditTask}
                </TaskList>
                <Footer>
                    onDeleteList={onDeleteList}
                    pendingToDo={pendingToDo}
                    completedToDo={completedToDo}
                </Footer>
            </div>
        </Flex>
    );
}

export default Tareas;