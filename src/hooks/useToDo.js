import { useEffect, useState } from "react";
import { localStorageData } from "../localStorageData";
import swal from "sweetalert";

export function useToDo() {
  const [list, setList] = useState([]);

  const pendingToDo = list.filter((task) => !task.completed).length;


  const addTask = (taskName, taskDescription) => {
    let newItem = {
      id: +new Date(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    swal({
      text: "Se ha agregado una nueva tarea.",
      icon: "success",
      button: "ok",
      timer: 3000,
    });
    setList([...list, newItem]);
  };


  const onDeleteItem = (id) => {
    swal({
      title: "Eliminar una tarea",
      text: "¿Estás seguro que deseas borrar esta tarea?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((answer) => {
      if (answer) {
        swal({
          text: "La tarea seleccionada se ha borrado con éxito.",
          icon: "success",
        });
        setList(list.filter((task) => task.id !== id));
      }
    });
  };



  const onEditTask = (objEditTask) => {
    const { id, name, description } = objEditTask;

    const temp = [...list];
    const element = temp.find((item) => item.id === id);
    element.name = name;
    element.description = description;

    setList(temp);
  };


  const onCompleted = (id) => {
    setList(
      list.map((task) => {
        return task.id === Number(id)
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };



  const onDeleteList = () => {
    swal({
      title: "Eliminar",
      text: "¿Estás seguro que deseas borrar la lista de tareas?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((answer) => {
      if (answer) {
        swal({
          text: "La lista de tareas se ha borrado con éxito.",
          icon: "success",
        });
        setList([]);
      }
    });
  };


  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);


  useEffect(() => {
    setList(JSON.parse(localStorageData));
  }, []);

  return {
    list,
    pendingToDo,
    addTask,
    onDeleteItem,
    onEditTask,
    onCompleted,
    onDeleteList,
  };
}
