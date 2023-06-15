import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100%;

  #explorer-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 30px;
    > span {
      font-size: 24px;
      font-weight: 500;
      font-family: "Poppins";
      color: #2c343e;
      margin: 0 auto;
    }
  }
`;

export const StyledNavigatorWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
