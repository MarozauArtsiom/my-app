import { useState, useEffect } from "react";
import ToDoList from "./toDoList";

const ToDoListContainer = () => {
  const [toDoList, setToDoList] = useState([]);

  const updateToDoList = (newToDoList) => {
    setToDoList(newToDoList);
    localStorage.setItem("toDoList", JSON.stringify(newToDoList));
  };

  const handleAddToDo = (toDo) => {
    updateToDoList([...toDoList, toDo]);
  };

  const handleDeleteToDo = (toDoKey) => {
    updateToDoList(toDoList.filter((item) => item.key !== toDoKey));
  };

  useEffect(() => {
    const savedToDoList = JSON.parse(localStorage.getItem("toDoList"));
    if (savedToDoList) {
      setToDoList(savedToDoList);
    }
  }, []);

  return (
    <ToDoList
      toDoList={toDoList}
      onAddToDo={handleAddToDo}
      onDeleteToDo={handleDeleteToDo}
    />
  );
};

export default ToDoListContainer;
