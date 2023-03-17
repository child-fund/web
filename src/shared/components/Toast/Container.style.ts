import styled from "styled-components";
import colors from "shared/assets/colors";

export const Container = styled.div`
  position: absolute;
  bottom: -100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  width: 90%;
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: ${colors.gray700};
  opacity: 1;
  color: ${colors.white};
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.8rem;
  text-align: center;
  white-space: pre-line;
  transition: bottom 0.5s, opacity 0.8s ease-in-out;
`;
