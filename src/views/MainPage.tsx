import { FC } from "react";
import { ToDoItemType } from "../types";
import ToDoList from "../components/ToDoList";
import styled from "styled-components";
import CreateToDo from "../components/CreateToDo";

const PageLayout = styled.div`
  display: flex;
  padding: 24px 36px;
  gap: 24px;
`

const MainPage : FC = () => {
  const toDos : Array<ToDoItemType> = [
    {
      time: new Date('2021-01-01'),
      id: '1',
      text: 'Learn React',
      onComplete: () => {console.warn(1)},
      onDelete: () => {console.warn(2)},
    }
  ];

  return (
    <PageLayout>
      <ToDoList
        items={toDos}
        title="Незавершенные задачи"
        onClearAll={() => {console.warn(3)}}
      />
      <CreateToDo />
    </PageLayout>
  )
}

export default MainPage;