import styled from "styled-components";

export const StyledAuthForm = styled.div`
  background: white;
  max-width: 480px;
  padding: 1rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 25%;
  z-index: 15;

  border-radius: 6px;

  #error-message {
    width: 95%;
    margin: 10px auto;
    color: #fff;
    background-color: #ff2121;
    padding: 20px 40px;
    font-size: 14px;
    text-align: center;
  }

  .divider {
    text-align: center;
  }

  #form-header {
    font-family: "Poppins";
    margin-top: 10px;

    #title {
      font-size: 34px;
      font-weight: 500;
      line-height: 55px;
      text-align: center;
    }
  }
`;
