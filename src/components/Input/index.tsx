import { ChangeEvent } from "react";
import useInput from "./hooks/useInput";
import { Container, Title, InputField, WarningMessage } from "./index.style";

type InputType = "password";

interface InputProps {
  className?: string;
  onValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  title: string;
  type?: InputType;
  value: string;
  warningMessage?: string;
  wrongInput: boolean;
}

const Input = (props: InputProps) => {
  const { isFocused, handleInputFieldBlur, handleInputFieldFocus } = useInput();

  return (
    <Container className={props.className}>
      {/* TODO: 컴포넌트 내부의 요소는 풀네임으로 안써줘도 되나요? */}
      <Title isFocused={isFocused} wrongInput={props.wrongInput}>
        {props.title}
      </Title>
      <InputField
        placeholder={` ${props.placeholder}`}
        onBlur={handleInputFieldBlur}
        onChange={props.onValueChange}
        onFocus={handleInputFieldFocus}
        value={props.value}
        type={props.type}
        wrongInput={props.wrongInput}
      />
      {props.wrongInput && (
        <WarningMessage>{props.warningMessage}</WarningMessage>
      )}
    </Container>
  );
};

export default Input;
