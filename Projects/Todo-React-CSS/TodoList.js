import { useState } from "react";
import Todo from "./Todo";
import './styles.css';

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodos = (todoText) => {
    const newTodos = [...todos, { todoText, isCompleted: false }];
    setTodos(newTodos);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo) return;
    addTodos(todo);
    setTodo("");
  };
  
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  return (
    <div className='container'>
      <h1 style={{ textAlign: "center", fontFamily: "Roboto", fontSize: "4rem", margin: "4rem 0" }}>
        Todo List
      </h1>
      <form onSubmit={handleSubmit}>
        <input className="todo-input" placeholder="Add Todo" value={todo} onChange={(e) => setTodo(e.target.value)} type="text" />
        <div className="input-adornment">
          <button className="add-button" onClick={handleSubmit}>
            Add
          </button>
        </div>
      </form>
      <div className="paper" style={{ marginTop: "1rem" }}>
        {todos.map((todo, index) => {
          return (
            <Todo todo={todo} index={index} key={index} removeTodo={removeTodo} completeTodo={completeTodo} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
