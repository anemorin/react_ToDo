export type ToDoItemType = {
  id: string;
  time: Date;
  text: string;
  onDelete: () => void;
  onComplete: () => void;
}