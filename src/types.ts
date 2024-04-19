export type ToDoItemType = {
  id: string;
  time: string;
  text: string;
  isCompleted: boolean;
}

export type WithValidation = {
  validate(): string | undefined;
}