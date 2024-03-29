import { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../../../contexts/AuthContext";
import { StyledProgressBar, StyledUploadModal } from "./styles";

type UploadModalProps = {
  progress: number[];
  uploadFiles: () => void;
  passLetAllowModalToClose: (value: boolean) => void;
};

export const UploadModal: React.FC<UploadModalProps> = ({
  progress,
  uploadFiles,
  passLetAllowModalToClose,
}) => {
  const [checked, setChecked] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [finishedUpload, setFinishedUpload] = useState(false);
  const [progressPercentage, setprogressPercentage] = useState(0);

  useEffect(() => {
    let newprogressPercentage = progress.reduce((prev, curr) => {
      return curr + prev;
    }, 0);
    newprogressPercentage = newprogressPercentage / progress.length;
    if (progressPercentage < newprogressPercentage)
      setprogressPercentage(newprogressPercentage);

    if (newprogressPercentage === 100) {
      setFinishedUpload(true);
    }
  }, [progress]);

  const toggleChecked = () => {
    setChecked(!checked);
  };
  const nextScreen = () => {
    setCurrentStep(1);
  };

  useEffect(() => {
    switch (currentStep) {
      case 0:
        passLetAllowModalToClose(true);
        break;
      case 1:
        passLetAllowModalToClose(false);
    }
  }, [currentStep]);

  let renderedScreen;
  switch (currentStep) {
    case 0:
      renderedScreen = (
        <ConfirmUploadScreen
          checked={checked}
          toggleChecked={toggleChecked}
          nextScreen={nextScreen}
          uploadFiles={uploadFiles}
          finishedUpload={finishedUpload}
        />
      );
      break;
    case 1:
      renderedScreen = (
        <UploadingScreen
          progressPercentage={progressPercentage}
          finishedUpload={finishedUpload}
        />
      );
      break;
  }

  return (
    <StyledUploadModal>
      <div id="upload-screen">{renderedScreen}</div>
    </StyledUploadModal>
  );
};

const ConfirmUploadScreen: React.FC<{
  checked: boolean;
  toggleChecked: () => void;
  nextScreen: () => void;
  uploadFiles: () => void;
  finishedUpload: boolean;
}> = ({ checked, toggleChecked, nextScreen, uploadFiles, finishedUpload }) => {
  const upload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    nextScreen();
    if (!finishedUpload) uploadFiles();
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
  progressPercentage: number;
  finishedUpload: boolean;
}> = ({ progressPercentage, finishedUpload }) => {
  const { user } = useAuth();

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
          <StyledProgressBar progressPercentage={progressPercentage} />
        ) : (
          <Link to={"../profile/" + user?.uid} className="confirm-button">
            Go to Gallery <AiOutlineArrowRight color="white" size={24} />
          </Link>
        )}
      </div>
    </>
  );
};
