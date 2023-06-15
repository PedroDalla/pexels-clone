import styled from "styled-components";

export const StyledProfile = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #title-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > img {
      border-radius: 50%;
      width: 130px;
    }
    > #profile-name {
      margin: 15px 0;
      font-size: 52px;
      font-family: "Poppins";
      font-weight: 500;
      color: #2c343e;
    }
  }

  #edit-profile {
    display: flex;
    justify-content: center;
    background: #05a081;
    color: #fff;
    font-family: "Poppins";
    text-decoration: none;
    font-size: 16px;
    border: 0;
    outline: 0;
    border-radius: 6px;
    padding: 0.8rem 1.3rem;
    transition: 0.2s ease;
    font-weight: 500;
    margin-bottom: 20px;

    svg {
      margin-right: 2px;
    }

    &:hover {
      opacity: 0.7;
      transform: translateY(-2px);
    }
  }

  #statistics-section {
    font-family: "Poppins";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px;

    a {
      text-decoration: none;
    }

    .statistic-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 5px 25px;
      position: relative;

      &:not(:last-child)::after {
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 20px;
        content: "";
        transform: translateY(-50%);
        background: #dfdfe0;
        transition: 0.2s ease;
      }

      .statistic-title {
        font-size: 14px;
        color: #7f7f7f;
        transition: 0.2s ease;
      }

      .statistic-value {
        font-size: 24px;
        color: #2c343e;
        transition: 0.2s ease;
      }

      &:hover {
        .statistic-title {
          color: #2c343e;
        }

        .statistic-value {
          color: black;
        }

        &::after {
          background-color: #636363;
        }
      }
    }
  }

  #navigator-container {
    width: 100%;

    .counter {
      padding-left: 2px;
      color: #7f7f7f;
      font-size: 14px;
    }
  }

  #empty-message {
    font-family: "Poppins";
    font-size: 40px;
    font-weight: 500;
    padding: 3rem;
    margin: 0 auto;
  }
`;
