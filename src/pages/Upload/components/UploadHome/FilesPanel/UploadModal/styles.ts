import styled from "styled-components";

export const StyledUploadModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.9);

  overflow: auto;

  #popup {
    max-width: 605px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    max-height: 100vh;
    margin: auto;
    outline: none;

    border-radius: 10px;
    background: #fff;
    padding: 30px;

    #outer-controls {
      position: absolute;
      top: -50px;
      right: 0;

      height: 4rem;

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
      font-family: "Poppins";
      font-weight: 400;
      font-size: 16px;
      color: #7f7f7f;

      display: flex;
      flex-direction: column;
      align-items: center;

      .modal-title {
        font-size: 33px;
        letter-spacing: -0.02em;
        font-weight: 500;
        color: #2c343e;
        margin-bottom: 30px;
      }

      .modal-entry {
        padding: 20px;
        border-radius: 10px;
        background-color: #ebebeb;
        margin-bottom: 20px;
      }

      #button-footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 10px;

        @media (max-width: 768px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 15px;
        }

        #agree-check {
          display: flex;
          cursor: pointer;
          align-items: center;
          user-select: none;

          > input {
            display: none;
          }

          .checkbox-label {
            width: 30px;
            height: 30px;
            transition: background-color 0.4s ease, border-color 0.4s ease,
              box-shadow 0.4s ease;
            border: 1px solid #dfdfe0;
            border-radius: 5px;
            margin-right: 6px;
            display: flex;
            justify-content: center;
            align-items: center;

            &.checked {
              border: 1px solid #05a081;
              background-color: #05a081;
            }
          }

          &:hover {
            .checkbox-label {
              border-color: #bfbfbf;
            }
          }

          .text-label {
            font-size: 18px;
          }
        }
      }

      .upload-progress {
        width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
      }
    }
  }
  .confirm-button {
    display: flex;
    align-items: center;
    background: #05a081;
    color: #fff;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    padding: 0.9rem 1.4rem;
    transition: 0.2s ease;
    font-weight: 600;
    letter-spacing: 0.3px;
    max-width: fit-content;
    text-decoration: none;

    cursor: pointer;

    &:hover:not(:disabled) {
      opacity: 0.7;
      transform: translateY(-2px);
    }

    &:disabled {
      color: #bfbfbf;
      border-color: #f7f7f7;
      background: #f7f7f7;
      cursor: not-allowed;
    }

    svg {
      margin-left: 4px;
    }
  }
`;

export const StyledProgressBar = styled.div<{ progressPercentage: number }>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #c0c0c0;

  display: flex;
  justify-content: left;

  &::after {
    content: "";
    width: ${({ progressPercentage }) => progressPercentage}%;
    height: 100%;
    background-color: #05a081;
    border-radius: 15px;
    transition: width 0.2s ease-in-out;
  }
`;
