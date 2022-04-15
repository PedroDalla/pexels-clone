import { StyledImage } from './styles'
import { HiDownload } from 'react-icons/hi'
import { AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai'


import { Photo } from '../../interfaces'

interface ImageProps{
    imageInfo: Photo
}

export const Image = ({imageInfo} : ImageProps): JSX.Element => {
    return (
        <StyledImage>
            <img src={imageInfo.src.large}></img>
            <div id='photo-controls'>
                <a id='author-link'>
                    <span>{imageInfo.photographer}</span>
                </a>
                <div id='photo-buttons'>
                    <button><HiDownload size='24px'></HiDownload></button>
                    <button><AiOutlinePlusCircle  size='24px'></AiOutlinePlusCircle></button>
                    <button><AiOutlineHeart size='24px'></AiOutlineHeart></button>
                </div>
            </div>
        </StyledImage>
    )
}