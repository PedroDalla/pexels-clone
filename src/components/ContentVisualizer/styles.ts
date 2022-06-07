import styled from 'styled-components'

export const StyledContentVisualizer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;

    width: 100%;
    height: 100%;

    background: rgba(0,0,0,0.5);

    overflow: auto;

    #popup{
        position: relative;
        margin: 0 auto;
    
        min-height: 600px;
        width: 65%;

        padding: 15px;
        margin-top: 2rem;
        border-radius: 6px;

        background: white;
        
        #popup-header{
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            padding: 10px;

            button{
                font-family: 'Roboto';
                font-weight: 300;
                background: #05a081;
                color: #fff;
                outline: none;
                border: 0;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover{
                    background:#06b995;
                    cursor: pointer;
                }

                &#download-btn{
                    padding: 12px 25px;
                    border-right: 1px solid #04876d;
                    border-radius: 3px 0 0 3px;
                    font-size: 15px;
                }

                &#download-options-btn{
                    padding: 10px 10px;
                    border-radius: 0 3px 3px 0;
                    font-size: 18px;
                }
            }
        }

        #popup-content{
            display: flex;
            justify-content: center;
        }


    }

`