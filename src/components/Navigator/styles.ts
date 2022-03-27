import styled from 'styled-components'

export const StyledNavigator = styled.div`
    display: flex;
    justify-content: center;

    border-bottom: 2px solid rgba(0,0,0,10%);  

    > ul{
        margin: 5px 0 0 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        
        li {
            margin: 0 6px;
            font-size: 17px;
            padding: 16px;
            transition: .2s color ease;
            cursor: pointer;

            &.selected{
                border-bottom: 3px solid #0064f9;
                color: #0064f9;
            }

            &:hover{
                color: #0064f9;
            }
        }
    }

`