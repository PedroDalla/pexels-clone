import { useState, useEffect } from 'react'
import { StyledContentExplorer } from './styles'
import { Image } from '../Image/index'
import { usePexels } from '../../hooks/usePexels'

interface ContentExplorerAuthSettingsProps {

}


export const ContentExplorer = ({ }: ContentExplorerAuthSettingsProps): JSX.Element => {
    const [columnCount, setColumnCount] = useState(2)
    const pexelsInfo = usePexels()

    console.log('render')

    let columns: Array<JSX.Element[]> = []

    if (pexelsInfo) {
        pexelsInfo.photos.map((photo, i) => {
            let mod = i % columnCount

            if (columns[mod]) {
                columns[mod].push(<Image imageInfo={photo} key={photo.id}></Image>)
            } else {
                columns[mod] = [<Image imageInfo={photo} key={photo.id}></Image>]
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

        calculateColumns()
    }, [])

    return (
        <StyledContentExplorer>
            <div id='explorer-header'>
                <span>Free Stock Photos</span>
            </div>
            <div id='explorer-main'>
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