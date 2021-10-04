import styled from "styled-components";

export const StyledNav = styled.nav<{ transparentBackground?: boolean }>`
  width: 100vw;
  padding: 0 1.25rem;
  color: white;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  min-height: 66px;
  display: flex;
  align-items: center;

  background-color: ${({ transparentBackground }) =>
    transparentBackground ? "rgba(0,0,0,100)" : "#232a34"};
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;

    &:hover {
      color: rgba(255, 255, 255, 0.85);
    }
  }
  > a {
    margin-right: 2.15rem;
    @media (max-width: 1000px) {
      margin-right: 1rem;
    }

    > svg {
      height: 40px;
      width: 40px;
      border-radius: 8px;
    }
    > span {
      margin-left: 1rem;
      font-size: 18px;
      display: flex;
      align-items: center;

      @media (max-width: 1000px) {
        display: none;
      }
    }
  }

  > ul {
    font-family: "Roboto";
    font-weight: 400;
    display: flex;
    list-style: none;
    margin: 0;
    margin-left: auto;
    margin-right: 2.15rem;
    font-size: 17px;
    padding: 0;

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2.15rem;

      #notifications-btn {
        background: transparent;
        outline: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          opacity: 85%;
          cursor: pointer;
        }
      }

      #upload-a {
        background: #05a081;
        border: 0;
        outline: 0;
        border-radius: 4px;
        padding: 0.7rem 2rem;
        margin-right: -2.5rem;

        &:hover {
          background: rgba(5, 160, 129, 0.85);
        }
      }

      #collapse-menu-btn {
        background-color: transparent;
        border: 0;
        outline: none;
      }
    }

    #collapse-menu-li {
      display: none;
    }

    @media (max-width: 1000px) {
      #explore-a-li,
      #license-a-li {
        display: none;
      }
    }

    @media (max-width: 850px) {
      margin-right: 1rem;

      #upload-a-li,
      #auth-li {
        display: none;
      }

      #collapse-menu-li {
        display: flex;
      }

      li {
        margin-right: 1rem;
      }
    }
  }
`;
