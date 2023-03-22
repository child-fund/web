import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";

import colors from "shared/assets/colors";

export const Container = styled.div<{ backgroundColor: string }>`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 2rem 0rem 2rem;
  background-image: ${({ backgroundColor }) => backgroundColor};
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 3.6rem;
`;

export const AirplanePreview = styled.div<{
  borderColor: string;
}>`
  align-self: center;
  min-width: 27rem;
  min-height: 27rem;
  margin-bottom: 5rem;
  background-image: ${({ borderColor }) =>
    `linear-gradient(#fff, #fff),${borderColor}`};
  background-origin: border-box;
  background-clip: content-box, border-box;
  border: 0.5rem solid transparent;
  border-radius: 1.6rem;
  line-height: 0;

  > img {
    width: 27rem;
  }
`;

export const WhiteBoard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% + 4rem);
  height: 10rem;
  margin-left: -2rem;
  padding: 2rem;
  padding-top: 2.6rem;
  background-color: ${colors.white};
  border-radius: 2rem 2rem 0rem 0rem;
`;

export const BoardTitle = styled.p`
  margin-bottom: 1.8rem;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Division = styled.hr`
  height: 0.1rem;
  margin-bottom: 2.8rem;
  background-color: #ededed;
  border-radius: 0.05rem;
`;

export const ButtonArea = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    flex-grow: 1;
  }
`;
