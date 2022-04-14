import styled from "styled-components"

export const StyledTooltip = styled.div<{ visible: boolean }>`
        

    #tooltip-main{
        background: white;
        border-radius: 2px;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);

        #tooltip-arrow, #tooltip-arrow::before{
        background: inherit;
        width: 8px;
        height: 8px;
        position: absolute;
        top: -2px;
        }

        #tooltip-arrow{
            visibility: hidden;

            &::before{
                visibility: visible;
                content: '';
                transform: rotate(45deg)
            }
        }
    }
`