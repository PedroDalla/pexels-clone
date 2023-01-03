import { StyledImage } from './styles'
import { FiDownload, FiBookmark, FiHeart } from 'react-icons/fi'


import { Photo } from '../../interfaces'
import { IoPersonCircle } from 'react-icons/io5'

interface ImageProps {
    imageInfo: Photo,
    setContent: Function
}

export const Image = ({ imageInfo, setContent }: ImageProps): JSX.Element => {
    return (
        <StyledImage onClick={() => {
            setContent(imageInfo)
        }}>
            <img src={imageInfo.src.large}></img>
            <div id='photo-controls'>
                <div id="controls-header" className="control-buttons">
                    <button><FiBookmark size='22px'></FiBookmark></button>
                    <button><FiHeart size='22px'></FiHeart></button>
                </div>
                <div id='controls-footer'>
                    <a id='author-link'>
                        {imageInfo.photographer_photo ? <img src={imageInfo.photographer_photo} alt="Author"></img> : <IoPersonCircle size='44px' />}
                        <span>{imageInfo.photographer}</span>
                    </a>
                    <div className="control-buttons">
                        <button><FiDownload size='22px'></FiDownload></button>
                    </div>

                </div>
            </div>
        </StyledImage>
    )
}