import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  width: 41.2rem;
  height: 91.5rem;
  background: white;

  border: 1px solid #dee2e6;

  @media (max-width: 412px) {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-height: 915px) {
    align-self: flex-start;
  }
`;
