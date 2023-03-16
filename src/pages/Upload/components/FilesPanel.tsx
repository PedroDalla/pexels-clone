import styled from "styled-components";
import { GoPlus } from "react-icons/go"
import { UploadFile } from "..";
import { useEffect, useState } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Tooltip } from "../../../components/Tooltip";
import { IoMdTrash } from "react-icons/io";

const StyledFilesPanel = styled.div`
    display: flex;
    gap: 80px;

    @media (max-width: 900px){
        flex-direction: column;
    }
    #image-card-container{
    }
`
const StyledFileOutliner = styled.div`
    width: 90px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 900px){
        flex-direction: row;
        width: auto;
        height: 90px;

        div.outline-container{
            margin-bottom: 0;
            
            &:not(:last-child){
                margin-right: 10px;
            }
        }
    }

    .outline-container {
        height: 90px;
        width: 90px;
        border: 3px solid transparent;

        margin-bottom: 10px;
        padding: 5px;
        border-radius: 15px;

        transition: 0.1s ease-in;

        &.selected{
            border: 3px solid #05a081;
        }

        &.error.selected{
            border: 3px solid #d3405c;
        }

        &.error{
            button{
                .btn-overlay{
                    background-color: rgba(211,64,92,.8);
                }
            }
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            color: #7F7F7F;
            padding: 0;

            border-radius: 6px;
            outline: none;
            border: none;

            cursor: pointer;

            background-position: center;
            background-size: cover;

            .btn-overlay{
                width: 100%;
                height: 100%;
                border-radius: 6px;
                color: white;

                margin: 0;
                z-index: 10;

                display: flex;
                justify-content: center;
                align-items: center;
            }

        }

        &#add-photo{
            border: 0;
            button{
                background: #F7F7F7;
            }
        }
    }
`
const StyledTooltip = styled.div`
    font-size: 16px;
    font-family: "Poppins";
    padding: 15px;
    background: #D3405C;
    border-radius: 10px;

    color: white;
`
const StyledButton = styled.button<{ background: string }>`background-image: ${p => p.background || ""};`

type FileOutlinerProps = {
    files: UploadFile[],
    handleUpload: () => void,
}

const FileOutliner: React.FC<FileOutlinerProps> = ({ files, handleUpload }) => {
    const [selected, setSelected] = useState<number>(0)
    const [mobile, setMobile] = useState(false)

    const handleClick = (index: number) => {
        setSelected(index)
    }

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900 && mobile) {
                setMobile(false)
            } else if (window.innerWidth <= 900 && !mobile) {
                setMobile(true)
            }
        })

        if (window.innerWidth > 900) {
            setMobile(false)
        } else if (window.innerWidth <= 900) {
            setMobile(true)
        }
    }, [])

    const tooltipArrowPosition = mobile ? { top: -3 } : { left: -3 }

    return <StyledFileOutliner>
        <div id="add-photo" className="outline-container">
            <button onClick={handleUpload}><GoPlus size={24}></GoPlus></button>
        </div>
        {
            files.map((file, index) =>
                <Tooltip tooltipContent={file.message ? <StyledTooltip>{file.message}</StyledTooltip> : null} activateOn="hover" activateIf={file.error} delay={100} placement={!mobile ? "right" : "bottom-start"} arrowOptions={{ size: 14, background: "#D3405C", ...tooltipArrowPosition }}>
                    <div key={index} className={`outline-container ${file.error ? "error" : ""} ${index === selected ? "selected" : ""}`}>
                        <StyledButton background={"url(" + file.data + ")"} onClick={() => handleClick(index)}>
                            <div className="btn-overlay">
                                {file.error && <BsFillExclamationTriangleFill size={24}></BsFillExclamationTriangleFill>}
                            </div>
                        </StyledButton>
                    </div></Tooltip>)
        }
    </StyledFileOutliner>
}


const StyledImageCard = styled.div<{ error: boolean }>`
    min-height: 360px;
    display: flex;
    
    &:not(:last-child){
        margin-bottom: 20px;
    }

    .image-card{
        background: ${p => p.error ? "#FBECEE" : "#F7F7F7"};
        padding: 50px 70px;
        margin-right: 30px;
        border-radius: 20px;
        width: 100%;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;

        font-family: "Poppins";

        
        h3{
            font-size: 33px;
            font-weight: 600;
        }

        p{
            font-size: 16px;
        }

        button{
            padding: 10px 30px;

            font-family: "Poppins";
            font-size: 16px;
            font-weight: 600;

            border-radius: 6px;
            outline: none;
            border: 0;
            cursor: pointer;
        }
        
        .image-container{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                border-radius: 10px;
                max-width: 100%;
            }
        }

        .error-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            font-family: "Poppins";
            color: #D3405C;
            

            h3{
                margin: 0;
                margin-bottom: 15px;
            }

            p{
                margin-bottom: 30px;
            }

            button{
                color: white;
                background: #D3405C;

                &:hover{
                    background: #C23B55;
                }
            }
        }
    }

    .delete-container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;

        button{
            width: 65px;
            height: 65px;
            outline: none;
            border: 0;
            border-radius: 50%;
            background: #F7F7F7;
            color: #c6c6c6;
            padding: 15px;
            cursor: pointer;

            &:hover{
                color: #7f7f7f;
                
            }
        }

        &.error{
            button{
                background: #D3405C;
                color: white;

                &:hover{
                    background: #C23B55;
                } 
            }
        }
    }

`

type ImageCardProps = {
    file: UploadFile,
    imageIndex: number,
    updateImage: (data: UploadFile, index: number) => void,
    deleteImage: (index: number) => void
    key: string | number,
}



const ImageCard: React.FC<ImageCardProps> = ({ file, deleteImage, imageIndex, updateImage }) => {
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>, file: UploadFile, index: number) => {
        let error = false;
        let message = undefined
        if (e.currentTarget.naturalWidth < 2560 || e.currentTarget.naturalHeight < 1440) {
            error = true
            message = "Uploads must be at least 4 megapixels in size. This photo will not be published."
        }
        const newFile: UploadFile = {
            ...file, ...{
                error: error,
                message: message
            }
        };
        updateImage(newFile, index)
    }

    return <StyledImageCard error={file.error}>
        <div className="image-card">
            <div className="image-container"><img src={file.data} onLoad={e => handleImageLoad(e, file, imageIndex)}></img></div>
            {file.error ?
                <div className="error-container">
                    <h3>Error</h3>
                    <p>{file.message}</p>
                    <button className="browse-error">Browse a new photo</button>
                </div> :
                <div className="image-form-container">

                </div>}

        </div>
        <div className={`delete-container ${file.error && "error"}`}>
            <button onClick={() => deleteImage(imageIndex)}><IoMdTrash size={32}></IoMdTrash></button>
        </div>
    </StyledImageCard>
}

type FilesPanelProps = {
    files: UploadFile[],
    handleUpload: () => void,
    updateImage: (data: UploadFile, index: number) => void,
    deleteImage: (index: number) => void
}

export const FilesPanel: React.FC<FilesPanelProps> = ({ files, handleUpload, updateImage, deleteImage }) => {
    return <StyledFilesPanel>
        <FileOutliner files={files} handleUpload={handleUpload}>
        </FileOutliner>
        <div id="image-card-container">
            {files.map((file, index) => <ImageCard file={file} key={index} imageIndex={index} updateImage={updateImage} deleteImage={deleteImage} />)}
        </div>
    </StyledFilesPanel>
}