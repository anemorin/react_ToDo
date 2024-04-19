import { FC } from "react"
import { ToDoItemType } from "../types"
import ToDoItem from "./ToDoItem"
import styled from "styled-components"
import useToDoStore from "../store/ToDoStore"

type Props = {
  title: string;
  items: ToDoItemType[];
  onClearAll: () => void;
}

const Title = styled.div`
  font-size: 36px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 70%;
  gap: 12px;
`

const Button = styled.button`
  background-color: '#6B6B6B';
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const ToDoList: FC<Props> = ({items, title, onClearAll}) => {
  const { completeItem, deleteItem } = useToDoStore();
  return (
    <ComponentLayout>
      <Title>
        {title}
        <Button
          onClick={onClearAll}
        >
          Очистить
        </Button>
      </Title>
      {items.map(
        (toDo) => {
          return (
            <ToDoItem
              key={toDo.id}
              time={toDo.time}
              text={toDo.text}
              onComplete={() => completeItem(toDo.id)}
              onDelete={() => deleteItem(toDo.id)}
              id={toDo.id}
            />
          )
        }
      )}
    </ComponentLayout>
  )
}

ToDoList.displayName = "ToDoList";
export default ToDoList;