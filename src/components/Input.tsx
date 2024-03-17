import { FC } from "react";
import styled from "styled-components";

type Props = {
  type: 'text' | 'time';
  value: string;
  onChange: (value: string) => void;
  title: string;
  placeholder?: string;
}

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 8px;
  width: 90%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-size: 16px;
`

const Input : FC<Props> = ({type, value, onChange, title, placeholder}) => {
  return (
    <InputContainer>
      <Title>{title}</Title>
      <StyledInput
        value={value}
        onChange={(value) => onChange(value.target.value)}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  )
}

export default Input;