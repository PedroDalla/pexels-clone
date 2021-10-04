import styled from "styled-components";

export const StyledSearchBar = styled.div<{ navSearchBar: boolean }>`
  margin-right: 1.9rem;
  max-width: 750px;
  width: 100%;
  border-radius: 6px;

  @media (max-width: 600px) {
    margin-right: 1rem;
  }

  form {
    display: flex;
    align-items: center;
    color: #1a1a1a;
    width: 100%;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.95);

    input {
      min-width: 0;
      padding: 0;
      border: none;
      outline: none;
      padding: ${({ navSearchBar }) => (navSearchBar ? ".7rem 1rem" : "1rem")};
      font-family: "Roboto", sans-serif;
      font-weight: 300;
      font-size: 17px;
      appearance: textfield;
      flex: 1;
      background: transparent;
      vertical-align: middle;
      @media (max-width: 600px) {
        font-size: 14px;
      }
    }

    button {
      background-color: transparent;
      outline: none;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
