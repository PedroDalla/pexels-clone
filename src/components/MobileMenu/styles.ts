import styled from "styled-components";

export const StyledMobileMenu = styled.div`
  position: fixed;
  top: 86px;
  width: 100%;
  height: calc(100% - 86px);
  border-top: 1px solid #fffff375;

  background: black;

  ul {
    list-style: none;
    width: 100%;
    padding: 0;

    a {
      color: white;
      font-size: 19px;
      font-weight: 600;
      font-family: "Plus Jakarta Sans";
      text-decoration: none;
    }
  }

  #menu-main-links {
    padding: 0.5rem 1rem;
    ul:not(:last-child) {
      border-bottom: 1px solid #fffff375;
      padding-bottom: 1.5rem;
    }

    ul:not(:first-child) {
      padding-top: 1.5rem;
    }

    ul {
      li {
        margin-bottom: 15px;
      }
    }
  }

  #menu-media-links {
    width: 100%;
    border-top: 1px solid #fffff375;
    padding: 1rem 0;
    margin-top: 1rem;

    ul {
      display: grid;
      grid-template-columns: 20% 20% 20% 20% 20%;

      li {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
