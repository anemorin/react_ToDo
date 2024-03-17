import { FC, useMemo } from "react";
import ToDoList from "../components/ToDoList";
import styled from "styled-components";
import CreateToDo from "../components/CreateToDo";
import UseStores from "../hooks/useStores";
import { observer } from "mobx-react";

const PageLayout = styled.div`
  display: flex;
  padding: 24px 36px;
  gap: 24px;
  justify-content: space-between;
`

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const MainPage : FC = () => {
  const { toDoStore } = UseStores();

  const Lists = useMemo(() => (
    <>
      <ToDoList
        items={toDoStore.incompleteToDos}
        title="Незавершенные задачи"
        onClearAll={() => toDoStore.clearUnCompletedItems()}
      />
      <ToDoList
        items={toDoStore.completedToDos}
        title="Завершенные задачи"
        onClearAll={() => toDoStore.clearCompletedItems()}
      />
    </>
  ), [toDoStore.toDos]);

  return (
    <PageLayout>
      <ListsContainer>
        {Lists}
      </ListsContainer>
      <CreateToDo />
    </PageLayout>
  )
}

MainPage.displayName = 'MainPage';
export default observer(MainPage);