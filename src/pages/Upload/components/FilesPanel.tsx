import styled from "styled-components";
import { GoPlus } from "react-icons/go"
import { UploadFile } from "..";
import { useState } from "react";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Tooltip } from "../../../components/Tooltip";

const StyledFilesPanel = styled.div`
    
`
const StyledFileOutliner = styled.div`
    width: 90px;

    .outline-container {
        height: 90px;
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
const StyledButton = styled.button<{ background: string }>`background-image: ${p => p.background || ""}`

const StyledTooltip = styled.div`
    font-size: 16px;
    font-family: "Poppins";
    padding: 15px;
    background: #D3405C;
    border-radius: 10px;

    color: white;
`

type FilesPanelProps = {
    files: UploadFile[],
    handleUpload: () => void
}

const FileOutliner: React.FC<FilesPanelProps> = ({ files, handleUpload }) => {
    const [selected, setSelected] = useState<number>(0)

    const handleClick = (index: number) => {
        setSelected(index)
    }

    return <StyledFileOutliner>
        <div id="add-photo" className="outline-container">
            <button onClick={handleUpload}><GoPlus size={24}></GoPlus></button>
        </div>
        {
            files.map((file, index) =>
                <Tooltip tooltipContent={file.message ? <StyledTooltip>{file.message}</StyledTooltip> : null} activateOn="hover" activateIf={file.error} delay={100} placement="right" arrowOptions={{ left: -3, size: 14, background: "#D3405C" }}>
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



export const FilesPanel: React.FC<FilesPanelProps> = ({ files, handleUpload }) => {
    return <StyledFilesPanel>
        <FileOutliner files={files} handleUpload={handleUpload}>
        </FileOutliner>
    </StyledFilesPanel>
}