import { makeAutoObservable } from "mobx";
import { ToDoItemType } from "../types";

class ToDoStore {
  toDos: ToDoItemType[];

  constructor() {
    makeAutoObservable(this)
    this.toDos = [];
  }

  public get completedToDos() {
    return this.toDos.filter(todo => todo.isCompleted);
  }

  public get incompleteToDos() {
    return this.toDos.filter(todo =>!todo.isCompleted);
  }

  public createToDoItem(item: ToDoItemType) {
    if (item.text.length !== 0 && item.time.length !== 0) {
      this.toDos = [
        ...this.toDos,
        item
      ]
    }
  }

  public completeItem(id: string) {
    const item = this.toDos.find((item) => item.id === id);
    if (item) {
      item.isCompleted = true;
      this.toDos = this.toDos.filter((item) => item.id !== id);
      this.toDos = [...this.toDos, item];
    }
  }

  public deleteItem(id: string) {
    this.toDos = this.toDos.filter((item) => item.id !== id);
  }

  public clearUnCompletedItems() {
    this.toDos = this.toDos.filter((item) => item.isCompleted);
  }

  public clearCompletedItems() {
    this.toDos = this.toDos.filter((item) => !item.isCompleted);
  }
}

export default ToDoStore;