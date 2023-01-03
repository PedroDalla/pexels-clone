import styled from 'styled-components'

export const StyledNavigator = styled.div`
    > ul{
        margin: 2rem 0;
        list-style: none;
        display: flex;
        flex-direction: row;
        padding: 0;
        
        li {
            margin: 0 4px;
            font-size: 17px;
            transition: .2s color ease;
            cursor: pointer;
            padding: 12px 20px;
            font-weight: 500;
            color: #4a4a4a;
            border: 1px solid transparent;
            border-radius: 30px;

            &.selected{
                color: #fff;
                background-color: black;

                &:hover{
                    color: #fff;
                    background-color: #2c343e;
                }
            }

            &:hover{
                color: black;
            }
        }
    }

`