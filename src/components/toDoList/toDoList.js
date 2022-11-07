import { useState } from "react";
import './toDoList.css';

const ToDoList = ({ toDoList, onAddToDo, onDeleteToDo }) => {
  const [toDo, setToDo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddToDo({ text: toDo, key: Date.now() });
    setToDo("");
  };

  return (
    <div className="to-do-list">
      <h1>ToDo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {toDoList.map((toDo) => (
          <div key={toDo.key}>
            <p>{toDo.text}</p>
            <button onClick={() => onDeleteToDo(toDo.key)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
