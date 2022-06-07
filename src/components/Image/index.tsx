import { StyledImage } from './styles'
import { HiDownload } from 'react-icons/hi'
import { AiOutlineHeart, AiOutlinePlusCircle } from 'react-icons/ai'


import { Photo } from '../../interfaces'

interface ImageProps{
    imageInfo: Photo,
    setContent: Function
}

export const Image = ({imageInfo, setContent} : ImageProps): JSX.Element => {
    return (
        <StyledImage onClick={() => {
            setContent(imageInfo)
        }}>
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