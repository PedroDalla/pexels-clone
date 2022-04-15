import styled from 'styled-components'

export const StyledContentVisualizer = styled.div`
    position: absolute;
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
        
    }

`