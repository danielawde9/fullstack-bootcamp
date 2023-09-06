import { useState } from "react";
import "./styles.css";
import Todo from "./Todo";

const TodoList = () => {
  // hay todo ma khassa bl todo juwet map
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.trim()) return;
    // if (todo.trim()) {
    addTodosArray(todo);
    setTodo("");
    // }
  };

  // hay betjib old todo w zid 3lya new todo
  // im not modifing the orignal array,
  // im copyong orignal array w updating the new array
  // im replacing the old array with the new array
  const addTodosArray = (todoText) => {
    const newTodos = [...todos, { todoText, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    /*

   todosArray 
   [
        {
            todoText: "daniel",
            isCompleted: true
        },
        {
            todoText: "dasdasd",
            isCompleted: false,
        {
            todoText: "daasdasdaniel",
            isCompleted: true
        },
        {
            todoText: "oiuhoiuh",
            isCompleted: false
        },
        .....
    ]
    */

    const newTodos = [...todos];
    // it will get the current value of the isCompleted w bye2leba
    // if true bsir false , w eza false bsir double false equal true
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>TODO</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          placeholder="Add todo"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <input type="submit" className="add-button" />
      </form>
      {/* if todos.length is not equal to zero show me the div className="paper" */}
      {todos.length !== 0 && (
        <div className="paper" style={{ marginTop: "20px", padding: "20px" }}>
          {todos.map((todoItem, index) => {
            return (
              <Todo
                todo={todoItem}
                key={index}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                index={index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TodoList;
