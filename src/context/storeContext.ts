import { createContext } from "react";
import ToDoStore from "../stores/ToDoStore";


export const storeContext = createContext({
    toDoStore: new ToDoStore(),
  });