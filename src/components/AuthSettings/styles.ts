import styled from "styled-components";

export const StyledAuthSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 85%;
    cursor: pointer;
  }

  *:not(:last-child) {
    margin-right: 0.1rem;
  }
`;
