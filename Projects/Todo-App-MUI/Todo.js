import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <ListItem
      style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}
    >
      <Checkbox
        onClick={() => completeTodo(index)}
        checked={todo.isCompleted}
      />
      <ListItemText primary={todo.todoText} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          onClick={() => {
            removeTodo(index);
          }}
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
export default Todo;
