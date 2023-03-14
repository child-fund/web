// TODO: style 분리를 이렇게 하는게 맞나

import colors from "assets/colors";
import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2rem;
`;

export const IdResult = styled.div`
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

export const Id = styled.span`
  color: ${colors.green500};
  font-size: 2rem;
  text-decoration: underline;
`;

export const PsNote = styled.p`
  margin-bottom: 1.2rem;
  color: ${colors.gray500};
`;
