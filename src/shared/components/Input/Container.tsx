import { ChangeEvent } from "react";

import useInput from "./hooks/useInput";

import {
  Container,
  Title,
  InputField,
  WarningMessage,
} from "./Container.style";

type InputType = "password";

interface InputProps {
  className?: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  title: string;
  type?: InputType;
  value: string;
  warningMessage?: string;
}

const Input = (props: InputProps) => {
  const { isFocused, handleInputFieldBlur, handleInputFieldFocus } = useInput();

  return (
    <Container className={props.className}>
      <Title isFocused={isFocused} wrongInput={Boolean(props.warningMessage)}>
        {props.title}
      </Title>
      <InputField
        placeholder={` ${props.placeholder}`}
        onBlur={handleInputFieldBlur}
        onChange={props.onValueChange}
        onFocus={handleInputFieldFocus}
        value={props.value}
        type={props.type}
        wrongInput={Boolean(props.warningMessage)}
      />
      {props.warningMessage && (
        <WarningMessage>{props.warningMessage}</WarningMessage>
      )}
    </Container>
  );
};

export default Input;
