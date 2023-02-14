import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Slices/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
