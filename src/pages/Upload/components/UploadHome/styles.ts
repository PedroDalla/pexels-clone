import styled from "styled-components";

export const StyledUploadHome = styled.div`
  @media (max-width: 1000px) {
    padding: 0 20px;
  }

  #upload-panel {
    padding: 20px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px #dfdfe0 dashed;

    &.dragging {
      background-color: #c9e7ff;
    }

    > svg {
      fill: #05a081;
      margin-top: 15px;
    }

    > h1 {
      font-family: "Plus Jakarta Sans";
      font-size: 32px;
      color: #2c343e;
      font-weight: 500;
      margin-top: 30px;
      margin-bottom: 30px;
      text-align: center;
      line-height: 40px;
    }

    > button {
      display: flex;
      justify-content: center;
      background: #05a081;
      color: #fff;
      font-family: "Plus Jakarta Sans";
      text-decoration: none;
      font-size: 16px;
      border: 0;
      outline: 0;
      border-radius: 6px;
      padding: 0.8rem 1.7rem;
      transition: 0.2s ease;
      font-weight: 500;
      margin-bottom: 20px;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
        transform: translateY(-2px);
      }
    }
  }

  #upload-details {
    padding: 10px 50px;
    font-family: "Plus Jakarta Sans";
    font-size: 15px;
    font-weight: 500;
    color: #2c343e;

    #ud-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      row-gap: 20px;
      list-style: none;
      padding: 0;

      a {
        border-bottom: 2px dotted #c7c7c7;
        text-decoration: none;
        color: #2c343e;
        transition: 0.1s ease-in;

        &:hover {
          border-bottom: 2px dotted #7c7c7c;
        }
      }

      @media (max-width: 1360px) {
        grid-template-columns: 1fr 1fr;
      }

      @media (max-width: 800px) {
        grid-template-columns: 1fr;
      }

      li {
        display: flex;
        align-items: center;

        svg {
          fill: #05a081;
          margin-right: 2px;
        }
      }
    }
  }
`;
