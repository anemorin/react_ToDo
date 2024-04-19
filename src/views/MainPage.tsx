import { FC, useEffect, useMemo } from "react";
import ToDoList from "../components/ToDoList";
import styled from "styled-components";
import CreateToDo from "../components/CreateToDo";
import { useDispatch, useSelector } from "react-redux";
import { clearCompletedItems, clearUnCompletedItems, setToDoItems, ToDoState } from "../store/toDoStore/ToDoReducer";

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

  const dispatch = useDispatch();
  const toDos = useSelector((state: { toDo: ToDoState }) => state.toDo.toDos);

  const completedToDos = useMemo(() => toDos.filter((todo) => todo.isCompleted), [toDos]);
  const incompleteToDos = useMemo(() => toDos.filter((todo) => !todo.isCompleted), [toDos]);

  const Lists = useMemo(() => (
    <>
      <ToDoList
        items={incompleteToDos}
        title="Незавершенные задачи"
        onClearAll={() => dispatch(clearUnCompletedItems())}
      />
      <ToDoList
        items={completedToDos}
        title="Завершенные задачи"
        onClearAll={() => dispatch(clearCompletedItems())}
      />
    </>
  ), [completedToDos, incompleteToDos, dispatch]);

  useEffect(() => {
    const items = localStorage.getItem('toDos');
    if (items) {
      const preparedData = JSON.parse(items);
      dispatch(setToDoItems(preparedData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);


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