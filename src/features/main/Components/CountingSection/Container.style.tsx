import colors from "shared/assets/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  margin-bottom: 2rem;
  padding-top: 2.6rem;
  padding-bottom: 0.8rem;
  background-color: #fcfdfd;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CountTitle = styled.p`
  margin-bottom: 1rem;
  color: ${colors.gray800};
  font-size: 1.2rem;

  > span {
    color: inherit;
    font-size: inherit;
    font-weight: bold;
  }
`;

export const EscalPrintLogo = styled.img`
  width: 5.5rem;
`;
