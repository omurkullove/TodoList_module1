import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ITodo, ITodoObj } from "../Interfaces/interfaces";
import axios from "axios";

const initialState: ITodo = {
  todos: [],
  favTodos: [],
};

const API = "https://fakedb-todolist-api.onrender.com";

export const SubmitTodoAsync = createAsyncThunk(
  "todo/SubmitTodoAsync",
  async (todo: ITodoObj, { dispatch }) => {
    try {
      await axios.post(`${API}/todos`, todo);
      dispatch(setSubmitTodo(todo));
    } catch (err) {
      console.log(err);
    }
  }
);

export const GetTodoAsync = createAsyncThunk(
  "todo/GetTodoAsync",
  async (_, { dispatch }) => {
    try {
      const res = await axios<ITodo>(`${API}/todos`);
      dispatch(setGetTodo(res.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const DeleteTodo = createAsyncThunk(
  "todo/DeleteTodo",
  async (id: number, { dispatch }) => {
    try {
      await axios.delete(`${API}/todos/${id}`);
      dispatch(GetTodoAsync());
      dispatch(GetTodoFromFavAsync());
    } catch (err) {
      console.log(err);
    }
  }
);

export const AddTodoToFavAsync = createAsyncThunk(
  "todo/AddTodoToFav",
  async (todo: ITodoObj, { dispatch }) => {
    try {
      await axios.put(`${API}/todos/${todo.id}`, todo);
      dispatch(GetTodoAsync());
    } catch (err) {
      console.log(err);
    }
  }
);

export const GetTodoFromFavAsync = createAsyncThunk(
  "todo/GetTodoFromFavAsync",
  async (_, { dispatch }) => {
    try {
      const oldTodos = await axios<ITodo[]>(`${API}/todos`);
      dispatch(setGetTodosFromFav(oldTodos.data));
    } catch (err) {
      console.log(err);
    }
  }
);

export const DeleteFromfavAsync = createAsyncThunk(
  "todo/DeleteFromfavAsync",
  async (todo: ITodoObj, { dispatch }) => {
    try {
      await axios.put(`${API}/todos/${todo.id}`, todo);
      dispatch(GetTodoFromFavAsync());
    } catch (err) {
      console.log(err);
    }
  }
);

export const ChangeTodosStatus = createAsyncThunk(
  "todo/ChangeTodosStatus",
  async (newTodo: ITodoObj, { dispatch }) => {
    try {
      await axios.put(`${API}/todos/${newTodo.id}`, newTodo);
      dispatch(GetTodoAsync());
      dispatch(GetTodoFromFavAsync());
    } catch (err) {
      console.log(err);
    }
  }
);

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setSubmitTodo: (state, action: PayloadAction<ITodoObj>) => {
      state.todos.push(action.payload);
    },
    setGetTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = action.payload;
    },
    setAddtoFavorites: (state, action: PayloadAction<ITodoObj>) => {
      state.favTodos.push(action.payload);
    },
    setGetTodosFromFav: (state, action: PayloadAction<ITodo[]>) => {
      state.favTodos = action.payload;
    },
  },
});

export const {
  setSubmitTodo,
  setGetTodo,
  setAddtoFavorites,
  setGetTodosFromFav,
} = TodoSlice.actions;
export default TodoSlice.reducer;
