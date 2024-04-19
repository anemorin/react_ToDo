import { configureStore } from '@reduxjs/toolkit';
import toDoReducer, { ToDoState } from './ToDoReducer';

export interface RootState {
  toDo: ToDoState;
}

export const store = configureStore<RootState>({
  reducer: {
    toDo: toDoReducer,
  },
});
