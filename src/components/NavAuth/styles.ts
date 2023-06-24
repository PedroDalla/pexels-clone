import styled from "styled-components";

export const StyledNavAuth = styled.nav<{
  page: "login" | "join";
  type: "dark" | "light";
}>`
  width: 100%;
  padding: 0 1.25rem;
  color: white;
  font-family: "Plus Jakarta Sans", Arial, Helvetica, sans-serif;
  min-height: 66px;
  display: flex;
  align-items: center;
  justify-content: ${({ page }) =>
    page == "join" ? "center" : "space-between"};
  position: ${({ page }) => (page == "join" ? "relative" : "fixed")};
  ${({ page }) => page == "join" && "border-bottom: 1px solid #e8e8e8;"}
  background: ${({ page }) => (page == "join" ? "white" : "transparent")};
  z-index: 10;

  user-select: none;

  a {
    text-decoration: none;
    color: black;
  }

  > div {
    position: ${({ page }) => (page == "join" ? "absolute" : "static")};
    right: 0;
    > span {
      color: ${({ type }) => (type == "dark" ? "#fff" : "#9e9e9e")};
      margin-right: 1rem;
      font-weight: 300;
      font-size: 14px;
    }

    > a {
      background: ${({ type }) => (type == "dark" ? "white" : "#e8e8e8")};
      border: 0;
      outline: 0;
      border-radius: 4px;
      padding: 0.5rem 1.5rem;
      transition: 0.2s ease;
      color: black;

      &:hover {
        opacity: 0.7;
        transform: translateY(-2px);
      }
    }
  }
`;
