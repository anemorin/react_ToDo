import { FC, useMemo } from "react";
import ToDoList from "../components/ToDoList";
import styled from "styled-components";
import CreateToDo from "../components/CreateToDo";
import useToDoStore from "../store/ToDoStore";

const PageLayout = styled.div`
  display: flex;
  padding: 24px 36px;
  gap: 24px;
`

const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`


const MainPage : FC = () => {
  const { toDos, clearUnCompletedItems, clearCompletedItems } = useToDoStore();

  const completedToDos = useMemo(() => toDos.filter((todo) => todo.isCompleted), [toDos]);
  const incompleteToDos = useMemo(() => toDos.filter((todo) => !todo.isCompleted), [toDos]);

  const Lists = useMemo(() => (
    <>
      <ToDoList
        items={incompleteToDos}
        title="Незавершенные задачи"
        onClearAll={() => clearUnCompletedItems()}
      />
      <ToDoList
        items={completedToDos}
        title="Завершенные задачи"
        onClearAll={() => clearCompletedItems()}
      />
    </>
  ), [clearCompletedItems, clearUnCompletedItems, completedToDos, incompleteToDos]);

  // useEffect(() => {
  //   const items = localStorage.getItem('toDos');
  //   if (items) {
  //     const preparedData = JSON.parse(items);
  //     dispatch(setToDoItems(preparedData));
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('toDos', JSON.stringify(toDos));
  // }, [toDos]);


  return (
    <PageLayout>
      <ListsContainer>
        {Lists}
      </ListsContainer>
      <CreateToDo />
    </PageLayout>
  )
}

export default MainPage;