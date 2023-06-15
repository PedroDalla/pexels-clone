import React, { useRef, useState } from "react";
import { Nav } from "../../components/Nav";
import { IStageFile } from "../../interfaces";
import { FilesPanel } from "./components/UploadHome/FilesPanel";
import { UploadHome } from "./components/UploadHome/UploadHome";
import { StyledUpload } from "./styles";

export const Upload: React.FC = () => {
  const [uploadFiles, setUploadFiles] = useState<IStageFile[]>([]);

  const fileInput = useRef<HTMLInputElement>(null);

  const handleFiles = (fileList: FileList) => {
    return Array.from(fileList).reduce((files, file) => {
      if (
        !uploadFiles.some((val) => val.id === file.name) &&
        file.type.startsWith("image/")
      ) {
        files.push({
          id: file.name,
          data: file,
          dataUrl: URL.createObjectURL(file),
          error: false,
          optionalDetails: {},
          technical: {
            aspectRatio: "",
            height: 0,
            width: 0,
          },
        });
      }
      return files;
    }, [] as IStageFile[]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadFiles([...uploadFiles, ...handleFiles(e.target.files)]);
      e.target.value = "";
    }
  };

  //Triggers the upload function
  const handleUpload = () => {
    if (fileInput.current) fileInput.current.click();
  };

  //Triggers the upload function when dragging files
  const handleDragUpload = (files: FileList) => {
    setUploadFiles([...uploadFiles, ...handleFiles(files)]);
  };

  //Deletes the selected image and triggers the fileInput for new selection
  const replaceImage = (index: number) => {
    deleteImage(index);
    if (fileInput.current) fileInput.current.click();
  };

  //Replaces a specific image object with new value
  const updateImage = (data: IStageFile, index: number) => {
    let newData = [...uploadFiles];
    newData[index] = data;
    setUploadFiles(newData);
  };

  //Removes an index from the image list
  const deleteImage = (index: number) => {
    let newData = [...uploadFiles];
    newData.splice(index, 1);
    setUploadFiles(newData);
  };

  return (
    <>
      <Nav searchBarEnabled={true} transparentBackground={false}></Nav>
      <StyledUpload>
        <input
          id="pic-input-hidden"
          type="file"
          ref={fileInput}
          multiple
          accept="image/*"
          onChange={(e) => handleFileChange(e)}></input>
        {uploadFiles.length <= 0 ? (
          <UploadHome
            handleUpload={handleUpload}
            handleDragUpload={handleDragUpload}
          />
        ) : (
          <FilesPanel
            files={uploadFiles}
            handleUpload={handleUpload}
            updateImage={updateImage}
            deleteImage={deleteImage}
            replaceImage={replaceImage}
          />
        )}
      </StyledUpload>
    </>
  );
};
