import styled from "styled-components";

export const StyledAuthForm = styled.form`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;

  .divider {
    margin: 1.5rem 0 1.5rem 0;
    font-weight: 300;
    font-family: "Plus Jakarta Sans";
    color: #757575;
  }

  .form-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input[type="text"] {
      max-width: 49%;
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    background: #f1f1f1;
    border-radius: 6px;
    border: 0;
    height: 3rem;
    padding: 1rem;
    display: block;
    font-size: 16px;
    line-height: 25px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0;
    color: #1a1a1a;

    margin-bottom: 1rem;

    &:focus {
      border: 2px solid #06b995;
      background: white;
    }
  }

  button {
    color: #fff;
    line-height: 1;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    padding: 12px 24px;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    font-weight: 300;
    user-select: none;

    margin-top: 1rem;

    &.form-submit {
      background: #05a081;
      border-color: #05a081;
      &:hover {
        background: #11c19b;
      }
    }

    &.sm-join {
      font-weight: 500;
      padding: 15px 24px;
      .icon {
        position: absolute;
        left: 5px;
      }

      &.facebook-join {
        background: #4267b2;
        border-color: #4267b2;
        &:hover {
          background: #5074be;
        }

        font-weight: 600;
      }

      &.google-join {
        background: #4285f4;
        border-color: #4285f4;
        &:hover {
          background: #5092fc;
        }

        font-weight: 600;
      }
    }
  }

  .footer {
    font-family: "Roboto";
    font-size: 11px;
    font-weight: 300;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #444444;
    border-bottom: 0;
    text-decoration: none;
  }
`;
