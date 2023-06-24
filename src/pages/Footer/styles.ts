import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-family: "Plus Jakarta Sans";
  font-size: 20px;

  color: #fff;
  background: #000;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #bababa;
    }
  }

  #footer-main {
    display: grid;
    grid-template-columns: 1fr 1fr 1.2fr;
    gap: 40px;
    margin: 0 auto;

    max-width: 1600px;
    padding: 4rem 2rem;

    @media (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: start;
    }

    #social-links {
      flex: 1;
      #sl-title {
        font-size: 22px;
      }
      #sl-downloads {
        #sl-downloads-title {
          font-size: 16px;
          color: #bfbfbf;
          margin-bottom: 10px;
        }

        #sl-downloads-btns {
          margin-bottom: 20px;
          display: flex;
          gap: 10px;

          button {
            padding: 12px 20px;
            border: 0;
            border-radius: 6px;

            display: inline-flex;
            justify-content: center;
            align-items: center;

            outline: none;

            font-size: 16px;
            font-family: "Plus Jakarta Sans";
            font-weight: 500;

            cursor: pointer;

            svg {
              margin-right: 5px;
            }

            &:hover {
              background-color: #dddddd;
            }
          }
        }
      }
      #sl-social {
        display: flex;
        align-items: center;
        button {
          outline: none;
          border: none;
          margin-right: 5px;
          background: transparent;

          cursor: pointer;

          &:hover {
            fill: #dddddd;
          }

          svg {
            fill: white;
          }
        }
      }
    }

    #useful-links {
      display: flex;
      gap: 40px;
      align-items: flex-start;
      flex: 1;
      font-size: 22px;

      @media (max-width: 1000px) {
        flex-direction: column;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .pl-title {
        margin-bottom: 16px;
        font-size: 23px;
      }
    }

    #popular-searches {
      flex: 1;

      #ps-title {
        margin-bottom: 20px;
        font-size: 24px;
      }

      #ps-links {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        flex-wrap: wrap;
        gap: 25px 10px;

        li {
          display: block;
          a {
            transition: all 0.1s ease-out;
            font-size: 16px;
            padding: 10px 15px;
            border-radius: 6px;
            border: 1px solid #d8d8d8;
            color: #d8d8d8;

            &:hover {
              color: black;
              background: #d8d8d8;
            }
          }
        }
      }
    }
  }

  #footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1600px;
    margin: 0 auto;
    padding: 2rem 2rem;

    font-size: 18px;
    color: #d8d8d8;

    #copyright {
      @media (max-width: 900px) {
        margin-bottom: 2rem;
      }
    }

    #fb-links {
      ul {
        list-style: none;
        display: flex;
        padding: 0;
        margin: 0;
        gap: 3rem;

        li {
          a {
            font-size: 18px;
            color: #d8d8d8;
            transition: all 0.3s ease-out;

            &:hover {
              color: #9c9c9c;
            }
          }
        }
      }

      margin-bottom: 2rem;
    }

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      #fb-links {
        ul {
          flex-direction: column;

          align-items: center;
          gap: 2px;
        }
      }
    }
  }
`;
