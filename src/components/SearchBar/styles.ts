import styled from "styled-components";

export const StyledSearchBar = styled.div<{
  navSearchBar?: boolean;
  margin?: string;
  maxWidth?: number;
}>`
  margin: ${({ margin }) => (margin ? margin : "0 1.9rem 0 0")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
  width: 100%;
  border-radius: 6px;

  @media (max-width: 600px) {
    margin-right: ${({ navSearchBar }) => (navSearchBar ? "1rem" : "0")};
  }

  form {
    display: flex;
    align-items: center;
    color: #1a1a1a;
    width: 100%;
    border-radius: 6px;
    background-color: #f7f7f7;

    input {
      min-width: 0;
      width: 100%;
      text-overflow: ellipsis;

      border: none;
      padding: ${({ navSearchBar }) =>
        navSearchBar ? ".9rem 1.2rem" : "1rem"};
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 18px;

      appearance: textfield;
      flex: 1;
      background: transparent;
      vertical-align: middle;

      &:focus {
        outline: none;
        box-shadow: 0 0px 16px #0005;
      }
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    button {
      background-color: transparent;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;

      @media (max-width: 400px) {
        padding: 0 0.5rem;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
