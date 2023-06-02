import { useMemo } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import styled from "styled-components";
import { UploadFile } from "../..";

const StyledUploadBar = styled.div<{ percentageReady: number }>`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 110px;
  width: 100%;
  background: #f7fbfd;

  padding: 30px 60px;
  max-width: 1600px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  .content-tracker {
    display: flex;
    align-items: center;
    &.ready {
      color: #05a081;
    }

    &.error {
      color: #d3405c;
    }

    .content-tracker-icon {
      margin-right: 15px;
    }
    .progress-bar {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(
          #05a081 ${({ percentageReady }) => percentageReady}%,
          #dfdfe0 0
        );
    }
    .content-tracker-text {
      font-family: "Poppins";

      .content-tracker-title {
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;

        @media (max-width: 900px) {
          display: none;
        }
      }

      .content-tracker-description {
        font-size: 16px;
        font-weight: 500;

        @media (max-width: 900px) {
          display: none;
        }
      }

      .content-tracker-description-mobile {
        font-size: 16px;
        font-weight: 600;

        @media (min-width: 900px) {
          display: none;
        }
      }
    }
  }

  .submit-button {
    background: #05a081;
    color: #fff;
    font-size: 18px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    padding: 0.8rem 1.3rem;
    transition: 0.2s ease;
    font-weight: 500;

    cursor: pointer;

    &:hover {
      opacity: 0.7;
      transform: translateY(-2px);
    }

    &.mobile {
      display: none;
    }

    @media (max-width: 900px) {
      display: none;

      &.mobile {
        display: block;
      }
    }
  }
`;

interface UploadBarProps {
  files: UploadFile[];
}

export const UploadBar: React.FC<UploadBarProps> = ({ files }) => {
  const filesReady = useMemo(
    () => files.filter((file) => !file.error).length,
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
      <div className="content-tracker error">
        <div className="content-tracker-icon">
          <RiErrorWarningFill size={35} color="#d3405c" />
        </div>
        <div className="content-tracker-text">
          <div className="content-tracker-title">Content failed</div>
          <div className="content-tracker-description">
            {files.filter((file) => file.error).length} of {files.length} photos
            failed
          </div>
          <div className="content-tracker-description-mobile">
            {files.filter((file) => file.error).length} / {files.length}
          </div>
        </div>
      </div>
      <div className="submit-button">Submit Content</div>
      <div className="submit-button mobile">Submit</div>
    </StyledUploadBar>
  );
};
