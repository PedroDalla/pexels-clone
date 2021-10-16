import styled from "styled-components";

export const StyledImage = styled.div`
  position: relative;
  min-width: 200px;
  max-width: 430px;
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
      padding: 10px;
      
      #author-link{
        display: flex;
        align-items: flex-end;

        > span {
          color: white;
        }
      }

      #photo-buttons{
        display: flex;
        align-items: flex-end;
        button{
          background: transparent;
          outline: none;
          border: 0;
        }
      }
  }
`;
