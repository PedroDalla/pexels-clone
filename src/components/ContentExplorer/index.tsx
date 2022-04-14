import { useState, useEffect, useRef } from 'react'
import { StyledContentExplorer } from './styles'
import { Image } from '../Image/index'
import { usePexels } from '../../hooks/usePexels'

interface ContentExplorerAuthSettingsProps {

}

export const ContentExplorer = ({ }: ContentExplorerAuthSettingsProps): JSX.Element => {
    const element = useRef<HTMLDivElement>(null)

    const [columnCount, setColumnCount] = useState(2)
    const {photos, fetchPhotos} = usePexels()

    let columns: Array<JSX.Element[]> = []

    if (photos) {
        photos.map((photo, i) => {
            let mod = i % columnCount

            if (columns[mod]) {
                columns[mod].push(<Image imageInfo={photo} ></Image>)
            } else {
                columns[mod] = [<Image imageInfo={photo} ></Image>]
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
        //Adding event listener to window resize to adjust the ammount of columns to display in the explorer
        window.onresize = () => {
            calculateColumns()
        }

        //Adding event listener to fetch more photos upon scrolling down the page
        window.onscroll =  () => {
            if(element.current){
                if(window.scrollY > element.current.scrollHeight / 2) {
                    //fetchPhotos(10)
                }
            }
        }

        calculateColumns()
    }, [])

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
        </StyledContentExplorer>
    )
}