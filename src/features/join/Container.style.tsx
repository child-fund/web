import styled from "styled-components";

import Title from "shared/components/Title/Container";
import Description from "shared/components/Description/Container";

export const ContentAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 1.2rem;
`;

export const StyledDescription = styled(Description)`
  margin-bottom: 3.6rem;
`;
