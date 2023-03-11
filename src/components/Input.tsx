import { useState } from "react";
import styled from "styled-components";
import colors from "assets/colors";

interface InputProps {
  className?: string;
  placeholder?: string;
  title: string;
  warningMessage?: string;
  wrongInput: boolean;
}

const Input = (props: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFieldBlur = () => {
    setIsFocused(false);
  };

  const handleInputFieldFocus = () => {
    setIsFocused(true);
  };

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Title = styled.span<{ isFocused: boolean; wrongInput: boolean }>`
  color: ${({ isFocused, wrongInput }) =>
    wrongInput ? colors.red : isFocused ? colors.green500 : colors.gray500};
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const InputField = styled.input<{ wrongInput: boolean }>`
  padding: 1rem;
  border: 1px solid
    ${({ wrongInput }) => (wrongInput ? colors.red : colors.gray300)};
  border-radius: 0.5rem;
  color: ${colors.gray900};
  font-size: 1.2rem;

  ::placeholder {
    color: ${colors.gray400};
  }

  :focus {
    border: 1px solid ${colors.green500};
  }
`;

const WarningMessage = styled.p`
  color: ${colors.red};
`;

export default Input;
