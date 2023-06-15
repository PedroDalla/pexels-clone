import { useMemo } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { IStageFile } from "../../../../../../interfaces";
import { StyledUploadBar } from "./styles";

interface UploadBarProps {
  files: IStageFile[];
  displayModal: () => void;
  completed: boolean;
}

export const UploadBar: React.FC<UploadBarProps> = ({
  files,
  displayModal,
  completed,
}) => {
  const [filesReady, filesNotReady] = useMemo(
    () => [
      files.filter((file) => !file.error).length,
      files.filter((file) => file.error).length,
    ],
    [files]
  );

  return (
    <StyledUploadBar percentageReady={(filesReady / files.length) * 100}>
      <div className="content-tracker ready">
        <div className="progress-bar content-tracker-icon" />
        <div className="content-tracker-text">
          <div className="content-tracker-title">Content ready</div>
          <div className="content-tracker-description">
            {filesReady} of {files.length} photos are ready to be uploaded
          </div>
          <div className="content-tracker-description-mobile">
            {filesReady} / {files.length}
          </div>
        </div>
      </div>
      {filesNotReady > 0 && (
        <div className="content-tracker error">
          <div className="content-tracker-icon">
            <RiErrorWarningFill size={35} color="#d3405c" />
          </div>
          <div className="content-tracker-text">
            <div className="content-tracker-title">Content failed</div>
            <div className="content-tracker-description">
              {filesNotReady} of {files.length} photos failed
            </div>
            <div className="content-tracker-description-mobile">
              {files.filter((file) => file.error).length} / {files.length}
            </div>
          </div>
        </div>
      )}
      <button
        type="button"
        className="submit-button"
        onClick={() => {
          if (!completed) displayModal();
        }}
        disabled={!filesReady || completed}>
        Submit Content
      </button>
      <button
        className="submit-button mobile"
        onClick={() => {
          if (!completed) displayModal();
        }}
        disabled={!filesReady || completed}>
        Submit
      </button>
    </StyledUploadBar>
  );
};
