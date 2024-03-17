import dayjs from "dayjs";
import { FC } from "react";
import styled from "styled-components";
import { icons } from "../enums";
import { ToDoItemType } from "../types";

const ToDoContainer = styled.div`
  height: 10%;
  min-height: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`

const ToDoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ToDoRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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

const ToDoItem : FC<ToDoItemType> = ({
  time, text, onDelete, onComplete
}) => {
  return (
    <ToDoContainer>
      <ToDoLeft>
        <div>{dayjs(time).format("HH:mm")}</div>
        <div>{text}</div>
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

export default ToDoItem;