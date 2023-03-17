import styled from "styled-components";
import colors from "shared/assets/colors";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DreamText = styled.p`
  flex-grow: 1;
  padding: 2rem;
  color: ${colors.gray700};
  font-size: 1.8rem;
  font-weight: 600;
  white-space: pre-wrap;
  word-break: break-all;
`;
