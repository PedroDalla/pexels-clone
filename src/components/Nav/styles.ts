import styled from "styled-components";

export const StyledNav = styled.nav<{ transparentBackground?: boolean }>`
  width: 100%;
  padding: 0 1.25rem;
  color: ${({ transparentBackground }) => transparentBackground ? "#fff" : "#4a4a4a"};
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  z-index: 10;
  user-select: none;

  background: ${({ transparentBackground }) => transparentBackground ? "transparent" : "#fff"};
  
  #nav-content{
    max-width: 1550px;
    min-height: 86px;
    display: flex;
    align-items: center;
    margin: 0 auto;

    a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: .2s ease;
    color: ${({ transparentBackground }) => transparentBackground ? "#fff" : "#4a4a4a"};

    &:hover {
      opacity: .7;
    }
  }

  > ul {
    font-family: "Poppins";
    display: flex;
    list-style: none;
    margin: 0;
    margin-left: auto;
    margin-right: 2.15rem;
    font-weight: 400;
    padding: 0;

    > li {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 2.15rem;
      font-size: 16px;
      font-weight: 500;

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
        background: ${({ transparentBackground }) => transparentBackground ? "#fff" : "#05a081"};
        color: ${({ transparentBackground }) => transparentBackground ? "black" : "#fff"};
        font-size: 18px;
        border: 0;
        outline: 0;
        border-radius: 6px;
        padding: 0.8rem 1.3rem;
        margin-right: -3.5rem;
        transition: 0.2s ease;
        font-weight: 500;

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
  }

  
`;
