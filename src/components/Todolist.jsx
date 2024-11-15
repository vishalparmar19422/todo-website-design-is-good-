import Todocard from "./Todocard";
const Todolist = (props) => {
 const {todo  , deleteTodo,editTodo } = props
  return (
    <>
      <ul className="main">
        {todo.map((todo, index) => {
          return <Todocard deleteTodo={ deleteTodo} key = {index} index={index} todo = {todo} editTodo={editTodo} />
        })}
      </ul>
    </>
  );
};

export default Todolist;
