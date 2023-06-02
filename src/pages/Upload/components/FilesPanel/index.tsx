import styled from "styled-components";
import { UploadFile } from "../..";
import { FileOutliner } from "./FileOutliner";

import { createRef, useRef, useState } from "react";
import { ImageCard } from "./ImageCard";
import { UploadBar } from "./UploadBar";

const StyledFilesPanel = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

type FilesPanelProps = {
  files: UploadFile[];
  handleUpload: () => void;
  updateImage: (data: UploadFile, index: number) => void;
  deleteImage: (index: number) => void;
  replaceImage: (index: number) => void;
};

export const FilesPanel: React.FC<FilesPanelProps> = ({
  files,
  handleUpload,
  updateImage,
  deleteImage,
  replaceImage,
}) => {
  const [selected, setSelected] = useState<number>(0);

  const selectImage = (index: number) => {
    setSelected(index);
  };

  const focusOnImage = (index: number) => {
    if (imageCardRefs.current[index] && imageCardRefs.current[index].current) {
      const y = imageCardRefs.current[index].current?.getBoundingClientRect().y;
      if (y) {
        window.scrollTo({ top: window.scrollY + y - 100, behavior: "smooth" });
      }
    }
  };

  const imageCardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);

  return (
    <StyledFilesPanel>
      <FileOutliner
        files={files}
        handleUpload={handleUpload}
        selected={selected}
        selectImage={selectImage}
        focusOnImage={focusOnImage}></FileOutliner>
      <div id="image-card-container">
        {files.map((file, index) => {
          imageCardRefs.current[index] = createRef<HTMLDivElement>();
          return (
            <ImageCard
              ref={imageCardRefs.current[index]}
              file={file}
              key={index}
              selected={selected}
              imageIndex={index}
              updateImage={updateImage}
              deleteImage={deleteImage}
              selectImage={selectImage}
              replaceImage={replaceImage}
            />
          );
        })}
      </div>
      <UploadBar files={files}></UploadBar>
    </StyledFilesPanel>
  );
};
