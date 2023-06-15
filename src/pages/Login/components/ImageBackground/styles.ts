import styled from "styled-components";

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledImageBackground = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  user-select: none;
  height: 100%;
  max-width: 1200px;

  padding-top: 1rem;
  margin: 0 auto;

  z-index: -10;

  div {
    width: 33.3%;
    @media (max-width: 1000px) {
      width: 50%;
    }
    display: flex;
    flex-direction: column;
    padding: 0 8px;

    img {
      margin-bottom: 1rem;
    }
  }
`;
