import React, { useRef, useState } from "react"
import styled from "styled-components"
import { Nav } from "../../components/Nav"
import { FilesPanel } from "./components/FilesPanel"
import { UploadHome } from "./components/UploadHome"

const StyledUpload = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1600px;
    padding: 0 90px;
    margin: 0 auto;
    margin-top: 120px;  

    #pic-input-hidden{
        display: none;
    }
`

export type UploadFile = {
    data: string,
    error: boolean,
    message?: string
}

export const Upload: React.FC = () => {
    const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([])

    const fileInput = useRef<HTMLInputElement>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            Array.from(e.target.files).forEach(file => {
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
                    if (fileReader.result && typeof fileReader.result === "string") {
                        const result = fileReader.result
                        let virtualImage = new Image()
                        virtualImage.onload = () => {
                            let error = false;
                            let message = undefined
                            if (virtualImage.width < 2560 || virtualImage.height < 1440) {
                                error = true
                                message = "Uploads must be at least 4 megapixels in size. This photo will not be published."
                            }
                            const uploadFile: UploadFile = { data: result, error: error, message: message }
                            setUploadFiles([...uploadFiles, uploadFile])
                        }
                        virtualImage.src = result
                    }
                }
                fileReader.readAsDataURL(file)
            })
        }
    }

    const handleUpload = () => {
        if (fileInput.current) fileInput.current.click()
    }

    return <>
        <Nav searchBarEnabled={true} transparentBackground={false}></Nav>
        <StyledUpload>
            <input id="pic-input-hidden" type="file" ref={fileInput} multiple accept="image/*" onChange={e => handleFileChange(e)}></input>
            {
                uploadFiles.length <= 0 ? <UploadHome handleUpload={handleUpload} /> : <FilesPanel files={uploadFiles} handleUpload={handleUpload} />
            }
        </StyledUpload>

    </>
}