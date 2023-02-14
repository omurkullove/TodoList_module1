import React, { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/hooks";
import { ITodoObj } from "../../Interfaces/interfaces";
import TodoItem from "../TodoItem";
import "./favorites.scss";
import "../Home/home.scss";
import {
  GetTodoFromFavAsync,
  setGetTodosFromFav,
} from "../../Slices/TodoSlice";
import FavItem from "../FavItem";
const Favorites: FC = () => {
  const favTodos = useAppSelector(state => state.todo.favTodos);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetTodoFromFavAsync());
  }, []);

  return (
    <div className="fav_block">
      <h1>Здесь отобржаются избранные задания!</h1>
      <div className="fav_todos_list">
        {favTodos.length || false ? (
          favTodos.map((todo: ITodoObj) => {
            if (todo.isFav === true) {
              return <FavItem favTodo={todo} />;
            } else {
              return;
            }
          })
        ) : (
          <h2>В избранных , пока ничего нет:(</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
