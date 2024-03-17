import { FC } from "react";
import styled from "styled-components";
import Input from "./Input";
import React from "react";

const ComponentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 30%;
  align-items: center;
  justify-content: left;
  border: 1px solid black;
  padding: 24px 12px;
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
  const [date, setDate] = React.useState('');
  const [text, setText] = React.useState('');
  return (
    <ComponentLayout>
      <Title>Создать задачу</Title>
      <Input
        type="time"
        value={date}
        onChange={setDate}
        title="Дата"
      />
      <Input
        type="text"
        value={text}
        onChange={setText}
        title="Текст"
      />
      <CreateButton
        onClick={() => {
          console.log(date, text);
        }}
      >
        Создать
      </CreateButton>
    </ComponentLayout>
  )
}

export default CreateToDo;