import styled from "styled-components";

export const StyledHero = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  width: 100vw;
  height: 100%;
  min-height: 380px;
  max-height: 500px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  #hero-background{
    position: absolute;
    inset: 0;
    z-index: -3;

    > img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &::before{
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg,rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.2) 100%),linear-gradient(180deg,rgba(0,0,0,0.2) 0%,transparent 100%);
    }
  }

  #hero-footer{
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
      color: white;
      font-size: 12px;
      font-family: 'Roboto', 'Poppins', sans-serif;
      text-decoration: none;
      opacity: .5;

      &:hover{
        opacity: 1;
      }
    }
  }

  #hero-content{
    font-family: 'Poppins', 'Roboto', sans-serif;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 650px;

    > h1{
      margin-top: 0;

    }
  }
`;
