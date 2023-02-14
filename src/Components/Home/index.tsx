import React, { FC, useEffect, useState } from "react";
import "./home.scss";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { ITodoObj } from "../../Interfaces/interfaces";
import { GetTodoAsync, SubmitTodoAsync } from "../../Slices/TodoSlice";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import TodoItem from "../TodoItem";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const todoArr = useAppSelector(state => state.todo.todos);

  const [todoTitle, setTodoTitle] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handlerSubmit = () => {
    if (!todoTitle) {
      handleClick();
      return;
    }

    const todoObj: ITodoObj = {
      dateOfPost: new Date().toLocaleString("en-US"),
      id: Date.now(),
      title: todoTitle,
      isChecked: false,
      isFav: false,
    };
    dispatch(SubmitTodoAsync(todoObj));
    setTodoTitle("");
  };

  useEffect(() => {
    dispatch(GetTodoAsync());
  }, []);

  return (
    <div className="container">
      <div className="block1">
        <label>
          Введите задание
          <textarea
            value={todoTitle}
            onChange={e => setTodoTitle(e.target.value)}
          />
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert severity="error">Ошибка! Заполните поле ввода!</Alert>
          </Snackbar>
        </label>
        <div>
          <button onClick={handlerSubmit}>Сохранить</button>
        </div>
      </div>
      <div className="block2">
        {todoArr?.map((todo: ITodoObj) => (
          <TodoItem todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Home;
