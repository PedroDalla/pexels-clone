import styled from "styled-components";

export const StyledFileOutliner = styled.div`
  width: 90px;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: auto;
    height: 90px;
  }

  #outliner {
    position: fixed;

    #ovflow-wrapper {
      display: flex;
      flex-direction: column;
      max-height: calc(100vh - 170px);
      overflow-y: overlay;

      &::-webkit-scrollbar {
        width: 0;
      }

      @media (max-width: 900px) {
        max-height: auto;
        overflow-x: overlay;
        flex-direction: row;
        width: auto;
      }
    }

    @media (max-width: 900px) {
      position: static;

      div.outline-container {
        margin-bottom: 0;

        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }

    .outliner-button-container {
      @media (min-width: 900px) {
        &:last-child {
          margin-bottom: 60px;
        }
      }
    }

    .outline-container {
      height: 90px;
      width: 90px;
      border: 3px solid transparent;

      margin-bottom: 10px;
      padding: 5px;
      border-radius: 15px;

      transition: 0.1s ease-in;

      &.selected {
        border: 3px solid #05a081;
      }

      &.error.selected {
        border: 3px solid #d3405c;
      }

      &.error {
        button {
          .btn-overlay {
            background-color: rgba(211, 64, 92, 0.8);
          }
        }
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #7f7f7f;
        padding: 0;

        border-radius: 6px;
        outline: none;
        border: none;

        cursor: pointer;

        background-position: center;
        background-size: cover;

        .btn-overlay {
          width: 100%;
          height: 100%;
          border-radius: 6px;
          color: white;

          margin: 0;
          z-index: 2;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      &#add-photo {
        border: 0;
        flex-shrink: 0;
        button {
          background: #f7f7f7;
        }
      }
    }
  }
`;
export const StyledTooltip = styled.div`
  font-size: 16px;
  font-family: "Poppins";
  padding: 15px;
  background: #d3405c;
  border-radius: 10px;
  white-space: nowrap;

  @media (max-width: 900px) {
    white-space: normal;
  }

  color: white;
`;
export const StyledButton = styled.button<{ background: string }>`
  background-image: ${(p) => p.background || ""};
`;
