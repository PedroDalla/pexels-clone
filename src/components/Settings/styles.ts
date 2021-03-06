import styled from "styled-components";

export const StyledProfilePicture = styled.div`
  img{
    width: 28px;
    height: 28px;
  }

`

export const StyledTooltipContent = styled.div`
    min-width: 340px;
    margin: 0;
    user-select: none;

    ul{
        list-style: none;
        margin: 8px 0;
        padding: 0;

        li{
            margin: 0;

            button{
                padding-left: 8px;
                background: white;
                font-size: 15px;
                width: 100%;
                padding: 10px 0 10px 14px;
                border: none;
                outline: none;
                text-align: left;

                font-family: 'Poppins';
                font-weight: 500;
                line-height: 1.4;
                color: #5e5e5e;

                &:hover{
                    background: #E8E8E8;
                    color: #1A1A1A;
                    cursor: pointer;
                }
            }
        } 
    }

    #media-links{

        ul{
            list-style: none;
            margin: 10px 0 10px 0;
            padding: 0 10px 0 10px;
            display: flex;
            flex-direction: row;

            li{
                width: 20%;

                button{
                    width: 100%;
                    color: black;
                    padding: 0;
                    display: flex;
                    padding: 10px 0 10px 0;
                    justify-content: center;

                    &:hover{
                        background: #232A34;
                        color: white;

                    }
                }
            }
        }
    }
`

export const StyledAuthSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 85%;
    cursor: pointer;
  }

  *:not(:last-child) {
    margin-right: 0.1rem;
  }
`;
