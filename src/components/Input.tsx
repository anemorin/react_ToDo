import { forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import { WithValidation } from "../types";

type Props = {
  type: 'text' | 'time';
  value: string;
  onChange: (value: string) => void;
  title: string;
  placeholder?: string;
  errorMessage?: string;
}

const StyledInput = styled.input<{error: boolean}>`
  padding: 8px;
  border-radius: 8px;
  width: 90%;
  border: ${(props) => (props.error? '1px solid red' : 'none')};
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

const ErrorContainer = styled.div`
  color: red;
  font-size: 12px;
  margin: 0;
`

const Input = forwardRef<WithValidation, Props>(
  ({type, value, onChange, title, placeholder, errorMessage}, ref) => {
  useImperativeHandle(ref, () => ({
    validate() {
      return value.length > 0 ? undefined : 'Поле обязательно для заполнения';
    }
  }))

  return (
    <InputContainer>
      <Title>{title}</Title>
      <StyledInput
        value={value}
        onChange={(value) => onChange(value.target.value)}
        type={type}
        placeholder={placeholder}
        error={!!errorMessage}
      />
      {errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer>}
    </InputContainer>
  )
})

export default Input;