import { useState, useEffect, useRef } from 'react'
import { StyledContentExplorer } from './styles'
import { Image } from '../Image/index'
import { usePexels } from '../../hooks/usePexels'
import { Photo, Video } from '../../interfaces'
import { ContentVisualizer } from '../ContentVisualizer'
import { createPortal } from 'react-dom'

export const ContentExplorer = (): JSX.Element => {
    const element = useRef<HTMLDivElement>(null)

    const [columnCount, setColumnCount] = useState(2)
    const [currentContent, setCurrentContent] = useState<Photo|Video|null>() 
    const {photos, fetchPhotos} = usePexels()

    let columns: Array<JSX.Element[]> = []

    function setContent(content: Photo|Video){
        setCurrentContent(content)
    }

    function hideContentVisualizer(){
        setCurrentContent(null)
    }

    if (photos) {
        photos.forEach((photo, i) => {
            let mod = i % columnCount

            if (columns[mod]) {
                columns[mod].push(<Image imageInfo={photo} setContent={setContent}></Image>)
            } else {
                columns[mod] = [<Image imageInfo={photo} setContent={setContent}></Image>]
            }
        })
    }

  

    //Only run on startup
    useEffect(() => {
        function calculateColumns(){
            let colNumber: number;
            if (window.innerWidth >= 1900) {
                colNumber = 4;
            } else if (window.innerWidth >= 1050) {
                colNumber = 3
            } else {
                colNumber = 2;
            }
            setColumnCount(colNumber)
        }
        //Adding event listener to window resize to adjust the ammount of columns to display in the explorer for responsiveness
        window.onresize = () => {
            calculateColumns()
        }

        //Adding event listener to fetch more photos upon scrolling down the page
        window.onscroll =  () => {
            if(element.current){
                if(window.scrollY > element.current.scrollHeight - 1500) {
                    fetchPhotos(10)
                }
            }
        }

        calculateColumns()
    }, [fetchPhotos])

    return (
        <StyledContentExplorer>
            <div id='explorer-header'>
                <span>Free Stock Photos</span>
            </div>
            <div id='explorer-main' ref={element}>
                {
                    columns.map((column, index) =>
                        <div key={index} className='explorer-column'>
                            {
                                column
                            }
                        </div>)
                }
            </div>
            {
                currentContent && createPortal(<ContentVisualizer content={currentContent} hideVisualizer={hideContentVisualizer}></ContentVisualizer>, document.body)
            }
        </StyledContentExplorer>
    )
}