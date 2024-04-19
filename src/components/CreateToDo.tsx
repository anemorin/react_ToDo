import { createRef, FC, useState } from "react";
import { WithValidation } from "../types";
import Input from "./Input";
import styled from "styled-components";
import useToDoStore from "../store/ToDoStore";

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

  const { createToDoItem } = useToDoStore();

  const [ DateRef, TextRef ] = refs;

  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState<string | undefined>('');
  const [text, setText] = useState('');
  const [textError, setTextError] = useState<string | undefined>('');

  const validateErrors = () => {
    const errors = [];
    refs.map((ref) => {
      const error = ref.ref.current!.validate();
      if (error) {
        switch(ref.id) {
          case 'DateRef':
            setDateError(error);
            break;
          default:
            setTextError(error);
            break;
        }
        errors.push(error);
      }
    })
    return !!errors.length;
  }

  const createHandler = () => {
    if (!validateErrors()) {
      createToDoItem({
        time: date,
        text: text,
        isCompleted: false,
      });
      setDate('');
      setText('');
    }
  }

  return (
    <ComponentLayout>
      <Title>Создать задачу</Title>
      <Input
        type="time"
        value={date}
        onChange={(value) => {
          setDate(value);
          setDateError(undefined);
        }}
        title="Дата"
        ref={DateRef.ref}
        errorMessage={dateError}
      />
      <Input
        type="text"
        value={text}
        onChange={(value) => {
          setText(value);
          setTextError(undefined);
        }}
        title="Текст"
        ref={TextRef.ref}
        errorMessage={textError}
      />
      <CreateButton
        onClick={() => createHandler()}
      >
        Создать
      </CreateButton>
    </ComponentLayout>
  )
}

export default CreateToDo;