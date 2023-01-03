import React, { useState, useEffect, useRef, useCallback } from "react";
import { Photo, Video, isPhoto } from "../../interfaces"
import { IoIosArrowDown } from 'react-icons/io'
import { IoCloseOutline } from 'react-icons/io5'
import { detectClickOutside } from "../../utils/detectClickOutside";
import { StyledContentVisualizer } from "./styles"
import { AiOutlineHeart } from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { Link } from "react-router-dom";


interface ContentVisualizerProps {
    content: Photo | Video;
    hideVisualizer: Function
}



export const ContentVisualizer = ({ content, hideVisualizer }: ContentVisualizerProps): JSX.Element => {
    const [zoomed, setZoomed] = useState(false)
    const popupElement = useRef(null)

    const closeVisualizer = () => {
        if (zoomed) {
            setZoomed(false)
        }
        hideVisualizer()
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        detectClickOutside(popupElement, () => {
            closeVisualizer()
        })
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [])

    const onMouseMove = useCallback((event: MouseEvent, image: EventTarget & HTMLImageElement) => {
        const X = (event.clientX * 100) / document.body.clientWidth
        const Y = (event.clientY * 100) / document.body.clientHeight
        image.style.transform = `scale(3) translate(${-(X - 50)}%, ${-(Y - 50)}%)`
    }, [])

    const mouseMoveWrapper = useRef<(event: MouseEvent) => void>()

    const handleZoom = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const image = e.currentTarget

        if (zoomed && mouseMoveWrapper.current) {
            document.body.removeEventListener("mousemove", mouseMoveWrapper.current)
            image.style.transform = "none";
            image.style.cursor = "zoom-in";
            setZoomed(false)
        } else {
            mouseMoveWrapper.current = (event: MouseEvent) => onMouseMove(event, image)
            image.style.transform = "scale(3)";
            image.style.cursor = "zoom-out";
            document.body.addEventListener("mousemove", mouseMoveWrapper.current)
            setZoomed(true)
        }
    }

    return (
        <StyledContentVisualizer>
            <div id="outer-controls"><button id="close-popup-btn" onClick={() => closeVisualizer()}><IoCloseOutline size={36}></IoCloseOutline></button></div>
            <div id='popup' ref={popupElement}>
                <div id='popup-header'>
                    <div id="header-info">
                        <div id="author-image">
                            <img src="https://lh3.googleusercontent.com/a-/AOh14GgiWS7fc0Qr3hY_qguvGVzfeDx-lM6ATyRAKV7Fcw=s96-c"></img>
                        </div>
                        <div id="author-info">
                            <div id="author-title">
                                <Link to={content.photographer_url}>{content.photographer}</Link>
                            </div>
                            <div id="follow-container">
                                <button id="follow-btn">Follow</button>
                            </div>
                        </div>
                    </div>
                    <div id="header-buttons">
                        <button id="collect-btn"><BiBookmarks size={22} />Collect</button>
                        <button id="like-btn"><AiOutlineHeart size={22} />Like <span id="like-count">54</span></button>
                        <button id='download-btn'>Free download</button><button id='download-options-btn'><IoIosArrowDown></IoIosArrowDown></button>
                    </div>
                </div>
                <div id='popup-content'>
                    <div id="image-container">
                        {
                            (isPhoto(content)) && <img src={content.src.original} onClick={e => handleZoom(e)} />
                        }
                    </div>
                </div>

            </div>
        </StyledContentVisualizer>
    )
}