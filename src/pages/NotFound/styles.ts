import styled from "styled-components";

export const StyledNotFound = styled.div`
  width: 100%;
  height: 100%;

  #not-found-content {
    font-family: "Poppins";
    padding: 3rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    gap: 40px;
    margin: 8rem auto 3rem auto;

    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;

      padding: 1rem 4rem;
    }

    #main-section {
      #title {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 10px;
        line-height: 55px;

        @media (max-width: 900px) {
          font-size: 36px;
          line-height: 40px;
        }
      }

      #sub-title {
        font-size: 22px;
        font-weight: 300;
      }

      #links-list {
        list-style: none;
        font-size: 17px;
        padding-left: 10px;

        li {
          margin-bottom: 10px;
          a {
            color: black;
            font-weight: 500;
          }
        }
      }
    }

    #banner-section {
      @media (max-width: 900px) {
        max-width: 400px;
      }

      > img {
        max-width: 100%;
      }
    }
  }
`;
