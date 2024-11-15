const Todocard = (props) => {
  const { todo, index, deleteTodo , editTodo} = props;

  return (
    <>
      <li className="todoItem">
        <p>{todo}</p>
        <div className="actionsContainer">
          <button onClick={()=>{
            editTodo(index)
          }}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => {
              deleteTodo(index);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </li>
    </>
  );
};

export default Todocard;
