import colors from "shared/assets/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: flex-end;
`;

export const Card = styled.div<{ upperColor: string }>`
  min-width: 2rem;
  padding: 0.5rem;
  border-radius: 0.4rem;
  background-image: linear-gradient(
    ${({ upperColor }) => upperColor} 50%,
    #94d66c 50%
  );
  color: ${colors.white};
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
`;

export const Comma = styled.span`
  color: #23b000;
`;
