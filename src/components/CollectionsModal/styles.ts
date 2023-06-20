import styled from "styled-components";

export const StyledCollectionsModal = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 50px;
  font-family: "Poppins";
  width: 600px;

  #cm-header {
    text-align: center;
    margin-bottom: 2rem;

    #cm-title {
      font-size: 33px;
      color: #2c343e;
      font-weight: 500;
      margin-bottom: 5px;
    }
    a {
      color: #7f7f7f;
      font-weight: 400;
      text-decoration: none;
      border-bottom: 2px dotted #c7c7c7;
      transition: color 0.2s ease;

      &:hover {
        color: black;
      }
    }
  }

  #collection-grid {
    display: grid;
    gap: 10px;
    grid-template-columns: 33.3% 33.3% 33.3%;
    width: 100%;

    .user-collection {
      width: 100%;

      .uc-image-container {
        position: relative;
        padding-top: 100%;
        margin-bottom: 10px;

        cursor: pointer;
        transition: transform 0.1s ease-in;

        > img {
          position: absolute;
          inset: 0;
          width: 100%;
          border-radius: 10px;
          max-height: 100%;
        }

        .uc-overlay {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          inset: 0;
          border-radius: 10px;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);

          transition: opacity 0.15s ease-in, background-color 0.2s ease;
          opacity: 0;

          button {
            color: white;
            fill: white;
            background-color: transparent;
            border: 0;
            outline: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
          }

          &:hover {
            opacity: 100;
          }

          &.added {
            opacity: 100;
            background-color: rgba(5, 160, 129, 0.7);

            &:hover {
              background-color: #f34e4eb3;
            }
          }
        }

        &:hover {
          transform: scale(1.03);
        }
      }
      .uc-title {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        max-width: 100%;
      }
    }
  }
`;
