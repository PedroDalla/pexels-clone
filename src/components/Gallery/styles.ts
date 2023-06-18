import styled from "styled-components";

export const StyledGallery = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0 1.5rem;

  #explorer-main {
    display: flex;

    .explorer-column {
      flex: 1;
    }
    .explorer-column:not(:last-child) {
      margin-right: 30px;
    }

    .explorer-column {
      > div:not(:first-child) {
        margin-top: 30px;
      }
    }
  }
`;
