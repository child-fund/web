import colors from "shared/assets/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 2rem;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(83, 214, 138, 0.12);
`;

export const Subtitle = styled.span`
  color: #191919;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
`;

export const Button = styled.button`
  color: ${colors.green500};
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
`;
