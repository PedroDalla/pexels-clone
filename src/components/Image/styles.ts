import styled from "styled-components";

export const StyledImage = styled.div`
  position: relative;
  width: 100%;

  cursor: pointer;

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
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(to top,rgba(0,0,0,0.5) 0%,transparent 100%);
      height: 100%;
      width: 100%;
      transition: opacity .2s;
      opacity: 0;
      display: flex;
      justify-content: space-between;
      padding: 10px 15px 15px 15px;

      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      
      .control-buttons{
        button{
          color: black;
          background: white;
          outline: none;
          border: 0;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
          transition: all 0.2s ease-in;

          &:not(:first-child){
            margin-left: 8px;
          }

          &:hover{
            background-color: #e0e0e0;
            transform: translateY(-1px);
          }
        }
      }

      #controls-header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 15px;
      }
      
      #controls-footer{
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 15px;

        #author-link{
            color: #e8e8e8;
            display: flex;
            align-items: center;
            flex-direction: row;

          > img, svg {
            margin-right: 5px;
          }

          > span {
            font-family: "Roboto";
            font-size: 16px;
            font-weight: 500;
          }
        }
      }
  }
`;
