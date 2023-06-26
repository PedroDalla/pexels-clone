import styled from "styled-components";

export const StyledImageCard = styled.div<{ error: boolean; hide: boolean }>`
  min-height: 360px;
  display: ${(p) => (p.hide ? "none" : "flex")};
  margin-bottom: 100px;

  @media (min-width: 901px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .image-card {
    background: ${(p) => (p.error ? "#FBECEE" : "#F7F7F7")};
    padding: 50px 70px;
    margin-right: 30px;

    @media (max-width: 900px) {
      margin-right: 0;
      margin-bottom: 20px;
      background: #f7f7f7;
      padding: 10px;
    }

    border-radius: 20px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }

    font-family: "Plus Jakarta Sans";

    h3 {
      font-size: 33px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
    }

    button {
      padding: 10px 30px;

      font-family: "Plus Jakarta Sans";
      font-size: 16px;
      font-weight: 600;

      border-radius: 6px;
      border: 0;
      cursor: pointer;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 10px;
        max-width: 100%;
      }
    }

    .remove-mobile {
      max-width: fit-content;
      margin: 0 auto;
      color: white;
      background: #d3405c;

      &:hover {
        background: #c23b55;
      }

      @media (min-width: 900px) {
        display: none;
      }
    }

    .image-form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .image-form {
        font-family: "Plus Jakarta Sans";
        width: 100%;

        .form-field {
          width: 100%;
          margin-bottom: 10px;

          .form-label {
            margin-bottom: 5px;
            font-weight: 500;
            font-size: 14px;
            color: #7f7f7f;

            .form-label-optional {
              color: #bfbfbf;
            }
          }

          input {
            border: none;

            width: 100%;

            font-size: 16px;
            font-weight: 400;
            color: #4a4a4a;
            padding: 14px;
            border-radius: 6px;

            font-family: "Plus Jakarta Sans";

            &::placeholder {
              color: #bfbfbf;
            }
          }
        }
      }
    }

    .error-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      font-family: "Plus Jakarta Sans";
      color: #d3405c;

      @media (max-width: 900px) {
        background: #ebebeb;
        border-radius: 20px;
        padding: 30px;
      }

      h3 {
        margin: 0;
        margin-bottom: 15px;
      }

      p {
        margin-bottom: 30px;
      }

      button {
        color: white;
        background: #d3405c;

        &:hover {
          background: #c23b55;
        }
      }
    }
  }

  .delete-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;

    @media (max-width: 900px) {
      display: none;
    }

    button {
      width: 65px;
      height: 65px;
      border: 0;
      border-radius: 50%;
      background: #f7f7f7;
      color: #c6c6c6;
      padding: 15px;
      cursor: pointer;

      &:hover {
        color: #7f7f7f;
      }
    }

    &.error {
      button {
        background: #d3405c;
        color: white;

        &:hover {
          background: #c23b55;
        }
      }
    }
  }
`;
