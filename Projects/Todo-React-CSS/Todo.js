import './styles.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
      <div className='todo-item' style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
        <input type='checkbox' onChange={() => completeTodo(index)} checked={todo.isCompleted} />
        <span className='todo-text'>{todo.todoText}</span>
        <div className='delete-action'>
          <button className='delete-button' onClick={() => removeTodo(index)}>
            Delete
          </button>
        </div>
      </div>
    );
  };
  export default Todo;
  