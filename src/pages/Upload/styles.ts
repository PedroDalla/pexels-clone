import styled from "styled-components";

export const StyledUpload = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 1600px;
  padding: 0 60px;
  margin: 0 auto;
  margin-top: 120px;

  @media (max-width: 900px) {
    padding: 0 5px;
  }

  #pic-input-hidden {
    display: none;
  }
`;
