import styled from "styled-components";

export const StyledNav = styled.nav<{ transparentBackground?: boolean }>`
  width: 100%;
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

  z-index: 10;

  user-select: none;

  background: ${({ transparentBackground }) =>
    transparentBackground ? "transparent" : "#232a34"};
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    transition: .2s ease;

    &:hover {
      opacity: .7;
    }
  }

  > ul {
    font-family: "Roboto";
    display: flex;
    list-style: none;
    margin: 0;
    margin-left: auto;
    margin-right: 2.15rem;
    font-size: 17px;
    padding: 0;

    > li {
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

      #main-a {
        background: #05a081;
        border: 0;
        outline: 0;
        border-radius: 4px;
        padding: 0.7rem 2rem;
        margin-right: -3.5rem;
        transition: 0.2s ease;

        &:hover {
          opacity: .7;
          transform: translateY(-2px);
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
      #license-a-li,
      #about-a-li  {
        display: none;
      }
    }

    @media (max-width: 850px) {
      margin-right: 1rem;

      #main-a-li,
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
