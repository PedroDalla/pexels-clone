import styled from "styled-components";

export const StyledContentExplorer = styled.div`
    width: fit-content;
    margin: auto;
    margin-top: 1rem;
    padding: 0 1.5rem;

    #explorer-header{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        > span {
            font-size: 18px;
            font-weight: 400;
        }        
        
    }

    #explorer-main{
        display: flex;
        .explorer-column:not(:last-child){
            margin-right: 1.3rem;
        }

        .explorer-column {
            div:not(:first-child) {
                margin-top: 1.3rem;
            }
        }
    }
`;

