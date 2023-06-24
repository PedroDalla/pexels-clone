import styled from "styled-components";

export const StyledHero = styled.header`
  position: relative;

  width: 100%;
  height: 100%;
  min-height: 380px;
  max-height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  #hero-background {
    position: absolute;
    inset: 0;
    z-index: -3;
    overflow: hidden;

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.2) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    }
  }

  #hero-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 2rem;
    display: flex;

    align-items: center;
    justify-content: flex-end;

    > a {
      margin-right: 1rem;
      margin-bottom: 1rem;
      color: #dbdbdb;
      font-size: 15px;
      font-family: "Plus Jakarta Sans", sans-serif;
      text-decoration: none;
      opacity: 0.7;
      transition: opacity 0.2s ease-in;

      > span {
        color: #fff;
      }

      &:hover {
        opacity: 1;
      }
    }
  }

  #hero-content {
    font-family: "Plus Jakarta Sans", "Roboto", sans-serif;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 650px;
    padding: 0 15px;

    > h1 {
      margin-top: 0;
      font-weight: 500;
    }
  }
`;
