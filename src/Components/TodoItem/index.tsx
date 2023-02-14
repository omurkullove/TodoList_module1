import React, { FC, useState } from "react";
import { ITodoObj } from "../../Interfaces/interfaces";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import Checkbox from "@mui/material/Checkbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "../Home/home.scss";

import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import {
  AddTodoToFavAsync,
  ChangeTodosStatus,
  DeleteTodo,
} from "../../Slices/TodoSlice";

interface TodoItemProps {
  todo: ITodoObj;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const favTodos = useAppSelector(state => state.todo.favTodos);

  const [star, setStar] = useState(false);

  const handleDelete = (id: number) => {
    dispatch(DeleteTodo(id));
  };

  const handleChangeTodosStatus = (todo: ITodoObj) => {
    const newTodo = {
      ...todo,
      isChecked: !todo.isChecked,
    };

    dispatch(ChangeTodosStatus(newTodo));
  };

  const handleAddTodoTofavAsync = (todo: ITodoObj) => {
    const oneFavTodo = favTodos.filter((item: ITodoObj) => item.id == todo.id);
    if (oneFavTodo.length === 0) {
      const newTodo = {
        ...todo,
        isFav: !todo.isFav,
      };
      dispatch(AddTodoToFavAsync(newTodo));
    } else {
      const newTodo = {
        ...todo,
        isFav: !todo.isFav,
      };
      dispatch(AddTodoToFavAsync(newTodo));
      return;
    }
  };

  return (
    <div
      className="todo_block"
      style={
        todo.isChecked
          ? { backgroundColor: "darkolivegreen" }
          : { backgroundColor: "transparent" }
      }>
      <div>
        <Checkbox
          checked={todo.isChecked}
          onChange={() => handleChangeTodosStatus(todo)}
        />
      </div>
      <div className="context_block">
        <p>{todo.title}</p>
        <p>{todo.dateOfPost}</p>
      </div>
      <div className="icon_block">
        <i onClick={() => handleAddTodoTofavAsync(todo)}>
          {todo.isFav ? <StarIcon /> : <StarBorderIcon />}
        </i>
        <i onClick={() => handleDelete(todo.id)}>
          <DeleteIcon />
        </i>
      </div>
    </div>
  );
};

export default TodoItem;
