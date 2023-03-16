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
    padding: 0 60px;
    margin: 0 auto;
    margin-top: 120px;  

    #pic-input-hidden{
        display: none;
    }
`

export type UploadFile = {
    id: string
    data: string,
    error: boolean,
    message?: string,
}

export const Upload: React.FC = () => {
    const [uploadFiles, setUploadFiles] = useState<UploadFile[]>([])

    const fileInput = useRef<HTMLInputElement>(null)

    const handleFiles = (fileList: FileList) => {
        return Array.from(fileList).reduce((files, file) => {
            if (!uploadFiles.some(val => val.id === file.name) && file.type.startsWith('image/')) {
                files.push({
                    id: file.name,
                    data: URL.createObjectURL(file),
                    error: false,
                })
            }
            return files
        }, [] as UploadFile[])
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setUploadFiles([...uploadFiles, ...handleFiles(e.target.files)]);
            e.target.value = ""
        }
    };

    const handleUpload = () => {
        if (fileInput.current) fileInput.current.click()
    }

    const handleDragUpload = (files: FileList) => {
        setUploadFiles([...uploadFiles, ...handleFiles(files)]);
    }

    const updateImage = (data: UploadFile, index: number) => {
        let newData = [...uploadFiles]
        newData[index] = data
        setUploadFiles(uf => newData)
    }

    const deleteImage = (index: number) => {
        let newData = [...uploadFiles]
        newData.splice(index, 1)
        setUploadFiles(newData)
    }

    return <>
        <Nav searchBarEnabled={true} transparentBackground={false}></Nav>
        <StyledUpload>
            <input id="pic-input-hidden" type="file" ref={fileInput} multiple accept="image/*" onChange={e => handleFileChange(e)}></input>
            {
                uploadFiles.length <= 0 ? <UploadHome handleUpload={handleUpload} handleDragUpload={handleDragUpload} /> : <FilesPanel files={uploadFiles} handleUpload={handleUpload} updateImage={updateImage} deleteImage={deleteImage} />
            }
        </StyledUpload>

    </>
}