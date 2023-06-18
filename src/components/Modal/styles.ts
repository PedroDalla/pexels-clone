import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.9);

  overflow: auto;
  #popup-controls {
    height: 4rem;
    padding: 20px;
    display: flex;
    justify-content: left;
    align-items: center;

    #close-popup-btn {
      background: transparent;
      outline: none;
      cursor: pointer;
      border: none;
      padding: 0;

      svg {
        color: #dddddd;
        transition: 0.1s ease-in;
      }

      &:hover {
        svg {
          color: white;
        }
      }
    }
  }
  #popup-content {
    position: relative;
    margin: 0 auto;
    max-width: fit-content;
  }
`;
