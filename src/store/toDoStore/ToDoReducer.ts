import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDoItemType } from '../../types';

export interface ToDoState {
  toDos: ToDoItemType[];
}

const initialState: ToDoState = {
  toDos: [],
};

const toDoSlice = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    createToDoItem: (state, action: PayloadAction<ToDoItemType>) => {
      console.warn(action.payload)
      if (action.payload.text?.length !== 0 && action.payload.time?.length !== 0) {
        state.toDos = [...state.toDos, action.payload]
      }
    },
    completeItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.toDos.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.toDos[itemIndex].isCompleted = true;
      }
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.toDos = state.toDos.filter((item) => item.id !== action.payload);
    },
    clearUnCompletedItems: (state) => {
      state.toDos = state.toDos.filter((item) => item.isCompleted);
    },
    clearCompletedItems: (state) => {
      state.toDos = state.toDos.filter((item) => !item.isCompleted);
    },
    setToDoItems : (state, action: PayloadAction<ToDoItemType[]>) => {
      state.toDos = action.payload;
    }
  },
});

export const { createToDoItem, completeItem, deleteItem, clearUnCompletedItems, clearCompletedItems, setToDoItems } = toDoSlice.actions;

export const selectCompletedToDos = (state: { toDo: ToDoState }) => state.toDo.toDos.filter((todo) => todo.isCompleted);
export const selectIncompleteToDos = (state: { toDo: ToDoState }) => state.toDo.toDos.filter((todo) => !todo.isCompleted);

export default toDoSlice.reducer;