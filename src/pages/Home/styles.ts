import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  #gallery-container {
    max-width: fit-content;
    margin: 1rem auto;
    padding: 0 30px;

    > #gallery-title {
      font-size: 24px;
      font-weight: 600;
      font-family: "Plus Jakarta Sans";
      color: #2c343e;
      margin-bottom: 2rem;
    }
  }
`;

export const StyledNavigatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
