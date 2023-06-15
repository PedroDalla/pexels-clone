import styled from "styled-components";

export const StyledFilesPanel = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;
