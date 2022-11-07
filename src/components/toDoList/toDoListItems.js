const toDoListItems = ({ toDoList, toDo, onDeleteToDo }) => {
  return (
    <div>
      {toDoList.map((toDo) => (
        <div key={toDo.key}>
          <p>{toDo.text}</p>
          <button onClick={() => onDeleteToDo(toDo.key)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default toDoListItems;
