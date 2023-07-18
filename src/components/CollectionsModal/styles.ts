import styled from "styled-components";

export const StyledCollectionsModal = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 50px;
  font-family: "Plus Jakarta Sans";
  width: 600px;

  @media (max-width: 650px) {
    width: calc(100vw - 2vw);
  }

  #cm-header {
    text-align: center;
    margin-bottom: 2rem;

    #cm-title {
      font-size: 33px;
      color: #2c343e;
      font-weight: 500;
      margin-bottom: 5px;
    }
    a {
      color: #7f7f7f;
      font-weight: 400;
      text-decoration: none;
      border-bottom: 2px dotted #c7c7c7;
      transition: color 0.2s ease;

      &:hover {
        color: black;
      }
    }
  }

  #collection-grid {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;

    @media (max-width: 650px) {
      grid-template-columns: 50% 50%;
    }

    .user-collection {
      width: 100%;

      .uc-image-container {
        position: relative;
        padding-top: 100%;
        margin-bottom: 10px;

        cursor: pointer;
        transition: transform 0.1s ease-in;

        > img {
          position: absolute;
          inset: 0;
          width: 100%;
          border-radius: 10px;
          max-height: 100%;
          object-fit: cover;
        }

        .empty-collection-image {
          position: absolute;
          inset: 0px;
          width: 100%;
          border-radius: 10px;
          max-height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #70757c;
        }
        .uc-overlay {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          inset: 0;
          border-radius: 10px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);

          transition: opacity 0.15s ease-in, background-color 0.2s ease;
          opacity: 0;

          button {
            color: white;
            fill: white;
            background-color: transparent;
            border: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }

          &:hover {
            opacity: 100;
          }

          &.added {
            opacity: 100;
            background-color: rgba(5, 160, 129, 0.7);

            &:hover {
              background-color: #f34e4eb3;
            }
          }
        }

        &:hover {
          transform: scale(1.03);
        }
      }
      .uc-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
      }
    }

    #add-new-collection {
      .uc-overlay {
        opacity: 100;
        background: #f7f7f7;

        button {
          color: #70757c;
        }
      }
    }
  }
`;

export const StyledNewCollectionModal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Plus Jakarta Sans";
  width: 450px;

  @media (max-width: 520px) {
    width: auto;
  }

  #modal-title {
    text-align: center;
    font-size: 36px;
    color: #2c343e;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  #edit-collection-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      font-size: 16px;
      color: #4a4a4a;
      font-weight: 500;

      input {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        width: 100%;
        height: 100%;
        padding: 12px 20px;
        color: #4a4a4a;
        border: none;
        border-radius: 6px;
        border: 1px solid #dfdfe0;
      }
    }
  }

  #buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;

    button {
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      transition: background-color 0.1s, border ease-in-out, transform 0.1s,
        box-shadow 5ms, border-color 0.25s;
      white-space: nowrap;
      text-decoration: none;
      letter-spacing: 0.3px;
      border: 1px solid #7f7f7f;
      border-radius: 6px;
      color: #2c343e;
      background: white;
      padding: 15px 30px;
      max-width: fit-content;

      &:hover {
        border-color: #464646;
      }

      &#update-button {
        color: white;
        background: black;

        &:hover {
          color: #2c343e;
          background: white;
        }
      }

      &#delete-button {
        color: white;
        background: #d3405c;
        border-color: #d3405c;

        &:hover {
          background: #c0354e;
        }
      }
    }
  }
`;
