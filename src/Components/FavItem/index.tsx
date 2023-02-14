import React, { FC } from "react";
import { ITodoObj } from "../../Interfaces/interfaces";
import { Checkbox } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useAppDispatch } from "../../Hooks/hooks";
import { ChangeTodosStatus, DeleteFromfavAsync } from "../../Slices/TodoSlice";

import "../Favorites/favorites.scss";

interface FavItemProps {
  favTodo: ITodoObj;
}

const FavItem: FC<FavItemProps> = ({ favTodo }) => {
  const dispatch = useAppDispatch();

  const handleChangeTodosStatus = (favTodo: ITodoObj) => {
    const newTodo = {
      ...favTodo,
      isChecked: !favTodo.isChecked,
    };

    dispatch(ChangeTodosStatus(newTodo));
  };

  const handleDeleteFromTodo = (favTodo: ITodoObj) => {
    const newTodo = {
      ...favTodo,
      isFav: !favTodo.isFav,
    };
    dispatch(DeleteFromfavAsync(newTodo));
  };

  return (
    <div
      className="favTodo_block"
      style={
        favTodo.isChecked
          ? { backgroundColor: "darkolivegreen" }
          : { backgroundColor: "transparent" }
      }>
      <div>
        <Checkbox
          checked={favTodo.isChecked}
          onChange={() => handleChangeTodosStatus(favTodo)}
        />
      </div>
      <div className="fav_context_block">
        <p>{favTodo.title}</p>
        <p>{favTodo.dateOfPost}</p>
      </div>
      <div className="icon_block">
        <p onClick={() => handleDeleteFromTodo(favTodo)}>
          Удалить из избранных
        </p>
      </div>
    </div>
  );
};

export default FavItem;
