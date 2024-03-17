import { FC } from "react";
import styled from "styled-components";
import { icons } from "../enums";
import { observer } from "mobx-react";

type Props = {
  id: string;
  time: string;
  text: string;
  onComplete: () => void;
  onDelete: () => void;
}

const ToDoContainer = styled.div`
  min-height: 36px;
  min-height: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  max-width: 100%;
`

const ToDoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const ToDoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ToDoText = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 80%;
  word-break: break-all;
  text-overflow: ellipsis;
`

const Button = styled.button`
  background-color: '#6B6B6B';
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`

const ToDoItem : FC<Props> = ({
  time, text, onDelete, onComplete,
}) => {
  return (
    <ToDoContainer>
      <ToDoLeft>
        <div>{time}</div>
        <ToDoText>{text}</ToDoText>
      </ToDoLeft>
      <ToDoRight>
        <Button
          onClick={onComplete}
        >
          <img src={icons.done_icon} />
        </Button>
        <Button
          onClick={onDelete}
        >
          <img src={icons.delete_icon} />
        </Button>
      </ToDoRight>
    </ToDoContainer>
  )
}

ToDoItem.displayName = "ToDoItem";
export default observer(ToDoItem);