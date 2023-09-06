import "./styles.css";
// function addition(a, b){ return a+b}
const Todo = ({ todo, removeTodo, index, completeTodo }) => (
  // if todo.isCompleted is true line thru else mashi
  <div
    className="todo-item"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
  >
    <input
      type="checkbox"
      onChange={() => {
        completeTodo(index);
      }}
    />
    <span className="todo-text">{todo.todoText}</span>
    <div className="delete-action">
      <button
        className="delete-button"
        onClick={() => {
          removeTodo(index);
        }}
      >
        Delete
      </button>
    </div>
  </div>
);
export default Todo;
