import colors from "shared/assets/colors";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: calc(100% + 4rem);
  margin-left: -2rem;
  margin-bottom: 3rem;
`;

export const ScrollableList = styled.div`
  display: flex;
  gap: 0.8rem;
  overflow-x: scroll;
  margin-bottom: 1.4rem;
  user-select: none;
  scrollbar-width: none; /* Firefox용 스크롤바 숨기기 */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera에서 스크롤바 숨기기 */
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

export const Item = styled.div<{ selected: boolean }>`
  position: relative;
  min-width: 11.6rem;
  min-height: 11.6rem;
  border: 0.2rem solid
    ${({ selected }) => (selected ? colors.green500 : "#ededed")};
  border-radius: 1rem;
  background-color: ${colors.white};
  line-height: 0;

  > img {
    width: 11.6rem;
  }
`;

export const CustomScrollbar = styled.div`
  position: relative;
  height: 0.3rem; /* 스크롤 바 높이와 동일하게 설정 */
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 0.15rem;
  background-color: #f2f2f2;
  cursor: pointer;
`;

export const CustomScrollbarThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10rem;
  height: 0.3rem;
  border-radius: 0.15rem;
  background-color: ${colors.green500};
`;
