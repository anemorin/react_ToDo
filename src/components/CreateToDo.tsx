import { FC, createRef } from "react";
import styled from "styled-components";
import Input from "./Input";
import React from "react";
import UseStores from "../hooks/useStores";
import { ToDoItemType, WithValidation } from "../types";

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 30%;
  align-items: center;
  justify-content: left;
  border: 1px solid black;
  padding: 24px 12px;
  height: 40%;
`;

const Title = styled.p`
  font-size: 24px;
  margin: 0;
`

const CreateButton = styled.button`
  padding: 8px;
  border-radius: 8px;
  width: 80%;
  border: none;
`;

const CreateToDo : FC = () => {
  const refs = [
    {
      ref: createRef<WithValidation>(),
      id: 'DateRef',
    },
    {
      ref: createRef<WithValidation>(),
      id: 'TextRef',
    },
  ]

  const [ DateRef, TextRef ] = refs;

  const [date, setDate] = React.useState('');
  const [dateError, setDateError] = React.useState<string | undefined>('');
  const [text, setText] = React.useState('');
  const [textError, setTextError] = React.useState<string | undefined>('');

  const { toDoStore } = UseStores();

  const randomId = function(length = 6) {
    return Math.random().toString(36).substring(2, length+2);
  };

  const CreateHandler = () => {
    refs.map((ref) => {
      if (ref.id === 'DateRef') {
        setDateError(ref.ref.current!.validate());
      } else {
        setTextError(ref.ref.current!.validate());
      }
    })
    toDoStore.createToDoItem({
      time: date,
      text: text,
      id: randomId(),
      isCompleted: false,
    } as ToDoItemType)
    setDate('');
    setText('');
  }

  return (
    <ComponentLayout>
      <Title>Создать задачу</Title>
      <Input
        type="time"
        value={date}
        onChange={setDate}
        title="Дата"
        ref={DateRef.ref}
        errorMessage={dateError}
      />
      <Input
        type="text"
        value={text}
        onChange={setText}
        title="Текст"
        ref={TextRef.ref}
        errorMessage={textError}
      />
      <CreateButton
        onClick={() => CreateHandler()}
      >
        Создать
      </CreateButton>
    </ComponentLayout>
  )
}

export default CreateToDo;