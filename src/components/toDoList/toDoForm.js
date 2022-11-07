import { useState } from "react";

const ToDoForm = ({ onAddToDo }) => {
  const [toDo, setToDo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddToDo({ text: toDo, key: Date.now() });
    setToDo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={toDo}
        onChange={(event) => setToDo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ToDoForm;
