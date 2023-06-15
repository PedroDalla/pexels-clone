import styled from "styled-components";

export const StyledUploadBar = styled.div<{ percentageReady: number }>`
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
    padding: 0.9rem 1.4rem;
    transition: 0.2s ease;
    font-weight: 600;
    letter-spacing: 0.3px;

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
