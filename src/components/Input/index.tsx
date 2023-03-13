import useInput from "./hooks/useInput";
import { Container, Title, InputField, WarningMessage } from "./index.style";

interface InputProps {
  className?: string;
  placeholder?: string;
  title: string;
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
        id="input"
        placeholder={` ${props.placeholder}`}
        onBlur={handleInputFieldBlur}
        onFocus={handleInputFieldFocus}
        wrongInput={props.wrongInput}
      />
      {props.wrongInput && (
        <WarningMessage>{props.warningMessage}</WarningMessage>
      )}
    </Container>
  );
};

export default Input;
