import styled from "styled-components";

export const StyledImage = styled.div`
  position: relative;
  min-width: 200px;
  max-width: 430px;

  cursor: pointer;

  @media (max-width: 500px) {
      min-width: 50px;
    }

  border-radius: 6px;
  > img {
      width: 100%;  
      display: block;
  }
  
  &:hover{
    #photo-controls {
      opacity: 1;
    }
  }

  #photo-controls {
      content: '';
      position: absolute;
      bottom: 0%;
      left: 0;
      right: 0;
      background: linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 100%);
      height: 100px;
      width: 100%;
      transition: opacity .2s;
      opacity: 0;
      display: flex;
      justify-content: space-between;
      padding: 10px 15px 15px 15px;

      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      
      
      #author-link{
        display: flex;
        align-items: flex-end;

        > span {
          color: #e8e8e8;
        }
      }

      #photo-buttons{
        display: flex;
        align-items: flex-end;
        button{
          color: #e8e8e8;
          background: transparent;
          outline: none;
          border: 0;
          cursor: pointer;

          &:hover{
            color: white;
          }
        }
      }
  }
`;
