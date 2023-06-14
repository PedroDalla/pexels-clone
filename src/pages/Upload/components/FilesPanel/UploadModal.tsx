import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import { detectClickOutside } from "../../../../utils/detectClickOutside";

const StyledUploadModal = styled.div`
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

const StyledProgressBar = styled.div<{ currentProgress: number }>`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #c0c0c0;

  display: flex;
  justify-content: left;

  &::after {
    content: "";
    width: ${({ currentProgress }) => currentProgress}%;
    height: 100%;
    background-color: #05a081;
    border-radius: 15px;
    transition: width 0.2s ease-in-out;
  }
`;

const ConfirmUploadScreen: React.FC<{
  checked: boolean;
  toggleChecked: () => void;
  nextScreen: () => void;
}> = ({ checked, toggleChecked, nextScreen }) => {
  const upload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    nextScreen();
  };

  return (
    <>
      <div className="modal-title">Please confirm</div>
      <div className="modal-entry">
        You only uploaded photos and videos that you own the copyright to and
        that you have created yourself.
      </div>
      <div className="modal-entry">
        Any depicted people or owners of depicted property gave you the
        permission to publish the photos and videos.
      </div>
      <div id="button-footer">
        <label id="agree-check" htmlFor="agree-checkbox">
          <input
            id="agree-checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => toggleChecked()}
          />
          <span className={`checkbox-label${checked ? " checked" : ""}`}>
            <AiOutlineCheck size={24} color="white"></AiOutlineCheck>
          </span>
          <span className="text-label">I understand and agree</span>
        </label>
        <button
          type="button"
          className="confirm-button"
          disabled={!checked}
          onClick={(e) => upload(e)}>
          Submit Content
        </button>
      </div>
    </>
  );
};

const UploadingScreen: React.FC<{
  progress: number[];
  uploadFiles: () => void;
}> = ({ progress, uploadFiles }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [finishedUpload, setFinishedUpload] = useState(false);

  useEffect(() => {
    if (!finishedUpload) uploadFiles();
  }, []);

  useEffect(() => {
    let newCurrentProgress = progress.reduce((prev, curr) => {
      return curr + prev;
    }, 0);
    newCurrentProgress = newCurrentProgress / progress.length;
    if (currentProgress < newCurrentProgress)
      setCurrentProgress(newCurrentProgress);

    if (newCurrentProgress === 100) {
      setFinishedUpload(true);
    }
  }, [progress]);

  return (
    <>
      <div className="modal-title">Uploading</div>
      <div className="modal-entry">
        {!finishedUpload
          ? "Please wait while your files are being uploaded.."
          : "Your files have been uploaded."}
      </div>
      <div className="upload-progress">
        {!finishedUpload ? (
          <StyledProgressBar currentProgress={currentProgress} />
        ) : (
          <button type="button" className="confirm-button">
            Go to Gallery <AiOutlineArrowRight color="white" size={24} />
          </button>
        )}
      </div>
    </>
  );
};

type UploadModalProps = {
  closeModal: () => void;
  progress: number[];
  uploadFiles: () => void;
};

export const UploadModal: React.FC<UploadModalProps> = ({
  closeModal,
  progress,
  uploadFiles,
}) => {
  const popupElement = useRef(null);
  const [checked, setChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const nextScreen = () => {
    setCurrentStep(1);
  };

  let renderedScreen;
  switch (currentStep) {
    case 0:
      renderedScreen = (
        <ConfirmUploadScreen
          checked={checked}
          toggleChecked={toggleChecked}
          nextScreen={nextScreen}
        />
      );
      break;
    case 1:
      renderedScreen = (
        <UploadingScreen progress={progress} uploadFiles={uploadFiles} />
      );
      break;
  }

  useEffect(() => {
    if (currentStep === 0) {
      const handleClickOutside = () => {
        closeModal();
      };

      document.body.style.overflow = "hidden";
      let unsubscribe = detectClickOutside(popupElement, handleClickOutside);
      return () => {
        document.body.style.overflow = "auto";
        unsubscribe();
      };
    }
  }, [currentStep]);

  return (
    <StyledUploadModal>
      <div id="popup" ref={popupElement}>
        <div id="outer-controls">
          {currentStep === 0 ? (
            <button id="close-popup-btn" onClick={() => closeModal()}>
              <IoCloseOutline size={36}></IoCloseOutline>
            </button>
          ) : null}
        </div>
        <div id="popup-content">{renderedScreen}</div>
      </div>
    </StyledUploadModal>
  );
};
