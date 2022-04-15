import { Photo } from "../../interfaces"
import { StyledContentVisualizer } from "./styles"

interface ContentVisualizerProps{
    content?: Photo
}

export const ContentVisualizer = ({} : ContentVisualizerProps): JSX.Element => {
    return (
        <StyledContentVisualizer>
            <div id='popup'>
                
            </div>
        </StyledContentVisualizer>
    )   
}