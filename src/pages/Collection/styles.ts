import styled from "styled-components";

export const StyledCollection = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Plus Jakarta Sans";
  padding: 0 1rem;

  #title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    #edit-btn {
      border-radius: 50%;
      background-color: transparent;
      padding: 10px;
      border: 2px solid #dfdfe0;
      color: #4a4a4a;
      transition: all 0.15s ease;
      cursor: pointer;
      width: 50px;
      height: 50px;

      margin-bottom: 20px;

      &:hover {
        border: 2px solid #7f7f7f;
        color: #7f7f7f;
      }
    }

    #title {
      font-size: 60px;
      font-weight: 600;
      margin-bottom: 15px;
      color: #2c343e;

      @media (max-width: 900px) {
        font-size: 40px;
      }
    }

    #description {
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 10px;
      color: #7f7f7f;

      @media (max-width: 900px) {
        font-size: 14px;
      }
    }
  }

  #content-section {
    margin-bottom: 2rem;
    #content-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 1rem;
      font-weight: 600;
      font-size: 18px;

      #user-info {
        display: flex;
        align-items: center;
        padding: 15px;
        cursor: pointer;

        #author-link {
          color: #2c343e;
          display: flex;
          align-items: center;
          flex-direction: row;

          > img,
          svg {
            margin-right: 10px;
            border: 4px solid transparent;
            transition: border 0.3s ease;

            &:hover {
              border: 4px solid #c7c7c7;
            }
          }

          > img {
            width: 60px;
            border-radius: 50%;
          }

          > span {
            font-size: 18px;
            font-weight: 600;
            border-bottom: 2px dotted #c7c7c7;
            transition: all 0.3s ease;

            &:hover {
              border-bottom: 2px dotted #8a8989;
            }
          }
        }
      }
    }

    #collection-count {
    }
  }
`;

export const StyledCollectionEditor = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Plus Jakarta Sans";
  width: 450px;

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
