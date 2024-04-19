import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { ToDoItemType } from '../types';


interface ToDoStore {
  toDos: ToDoItemType[];
  createToDoItem: (item: Omit<ToDoItemType, 'id'>) => void;
  completeItem: (id: string) => void;
  deleteItem: (id: string) => void;
  clearUnCompletedItems: () => void;
  clearCompletedItems: () => void;
}

const useToDoStore = create<ToDoStore>()(
  devtools(
    persist(
      (set) => ({
        toDos: [],
        createToDoItem: (item) =>
          set((state) => ({
            toDos: [...state.toDos, { id: uuidv4(), ...item }],
          })),
        completeItem: (id) =>
          set((state) => ({
            toDos: state.toDos.map((todo) => (todo.id === id ? { ...todo, isCompleted: true } : todo)),
          })),
        deleteItem: (id) =>
          set((state) => ({
            toDos: state.toDos.filter((todo) => todo.id !== id),
          })),
        clearUnCompletedItems: () =>
          set((state) => ({
            toDos: state.toDos.filter((todo) => todo.isCompleted),
          })),
        clearCompletedItems: () =>
          set((state) => ({
            toDos: state.toDos.filter((todo) => !todo.isCompleted),
          })),
      }),
      {
        name: 'toDoStore',
      }
    )
  )
);

export default useToDoStore;
