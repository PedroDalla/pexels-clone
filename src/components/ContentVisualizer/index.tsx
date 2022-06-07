import { useState, useEffect, useRef } from "react";
import { Photo, Video, isPhoto} from "../../interfaces"
import { IoIosArrowDown } from 'react-icons/io'
import { detectClickOutside } from "../../utils/detectClickOutside";
import { StyledContentVisualizer } from "./styles"


interface ContentVisualizerProps{
    content: Photo | Video;
    hideVisualizer: Function
}

export const ContentVisualizer = ({content, hideVisualizer} : ContentVisualizerProps): JSX.Element => {
    const [rendered, setRendered] = useState<JSX.Element>()
    const popupElement = useRef(null)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        detectClickOutside(popupElement, () => {
            hideVisualizer()
            
        })
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    useEffect(() => {
        if(isPhoto(content)){
            setRendered(<img src={content.src.large}/>)
        }
    }, [content])
    

    return (
        <StyledContentVisualizer>
            <div id='popup' ref={popupElement}>
                <div id='popup-header'>
                    <button id='download-btn'>Free Download</button><button id='download-options-btn'><IoIosArrowDown></IoIosArrowDown></button>
                </div>
                <div id='popup-content'>
                    {
                        rendered
                    }
                </div>
                
            </div>
        </StyledContentVisualizer>
    )   
}