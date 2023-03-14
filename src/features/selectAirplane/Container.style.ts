import styled from "styled-components";

import Title from "components/Title";
import Description from "components/Description";

import colors from "assets/colors";

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
  backgroundColor: string;
  borderColor: string;
}>`
  align-self: center;
  min-width: 27rem;
  min-height: 27rem;
  margin-bottom: 5rem;
  background-image: ${({ backgroundColor, borderColor }) =>
    `${backgroundColor},${borderColor}`};
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

export const AirplaneSlider = styled.div`
  display: flex;
  gap: 0.8rem;
  width: calc(100% + 4rem);
  min-height: 11.6rem;
  overflow-x: scroll;
  margin-left: -2rem;
  margin-bottom: 3rem;

  ::-webkit-scrollbar {
    width: 5rem;
    height: 0.3rem;
    border-radius: 0.15rem;
    background-color: #f2f2f2;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0.15rem;
    background-color: ${colors.green500};
  }

  > div:first-of-type {
    margin-left: 2rem;
  }

  > div:last-of-type {
    :after {
      content: "";
      position: absolute;
      top: 0;
      right: -2rem;
      width: 2rem;
      height: 1rem;
    }
  }
`;

export const AirplaneOption = styled.div<{ selected: boolean }>`
  position: relative;
  min-width: 11.6rem;
  min-height: 11.6rem;
  margin-bottom: 1.4rem;
  border: 0.2rem solid
    ${({ selected }) => (selected ? colors.green500 : "#ededed")};
  border-radius: 1rem;
  background-color: ${colors.white};
  line-height: 0;

  > img {
    width: 11.6rem;
  }
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  > button {
    flex-grow: 1;
  }
`;
