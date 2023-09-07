import "./styles.css";

// This React component represents an individual todo item.
const Todo = ({
  todo, // Object containing todo details (e.g., text and completion status).
  removeTodo, // Function to remove the current todo.
  index, // Index of the current todo in the list.
  completeTodo, // Function to mark the current todo as completed.
}) => (
  // Display the todo item. If the todo is completed, its text will have a line-through style.
  <div
    className="todo-item"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
  >
    {/* // Checkbox to mark the todo as completed. */}
    <input
      type="checkbox"
      onChange={() => {
        // it gives the index to which item to remove from todos array
        completeTodo(index);
      }}
    />
    {/* // Display the todo text from todo object. */}
    <span className="todo-text">{todo.todoText}</span>
    {/* // Delete button to remove the todo. */}
    <div className="delete-action">
      <button
        className="delete-button"
        onClick={() => {
          // it gives the index to which item to remove from todos array
          removeTodo(index);
        }}
      >
        Delete
      </button>
    </div>
  </div>
);

export default Todo;
