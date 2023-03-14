// TODO: style 분리를 이렇게 하는게 맞나

import styled from "styled-components";
import Button from "components/Button";
import colors from "assets/colors";

export const ResultSentence = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 3rem;

  > p {
    color: ${colors.gray500};
    font-size: 2rem;
  }
`;

export const Nickname = styled.span`
  font-size: 2rem;
`;

export const ResultValue = styled.span`
  color: ${colors.green500};
  font-size: 2rem;
  text-decoration: underline;
`;

export const PsNote = styled.p`
  margin-bottom: 1.2rem;
  color: ${colors.gray500};
`;

export const StyledButton = styled(Button)`
  font-size: 1.2rem;
`;
