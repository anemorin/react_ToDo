import { FC } from "react"
import { ToDoItemType } from "../types"
import ToDoItem from "./ToDoItem"
import styled from "styled-components"

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
  width: 70%;
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
              onComplete={toDo.onComplete}
              onDelete={toDo.onDelete}
              id={""}
            />
          )
        }
      )}
    </ComponentLayout>
  )
}

export default ToDoList;