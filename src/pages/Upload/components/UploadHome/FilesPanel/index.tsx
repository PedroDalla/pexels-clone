import { FileOutliner } from "./FileOutliner";
import { createRef, useRef, useState } from "react";
import { ImageCard } from "./ImageCard";
import { UploadBar } from "./UploadBar";
import { createPortal } from "react-dom";
import { UploadModal } from "./UploadModal";
import { uploadImage } from "../../../../../services/firebase";
import { useAuth } from "../../../../../contexts/AuthContext";
import { IStageFile } from "../../../../../interfaces";
import { StyledFilesPanel } from "./styles";

type FilesPanelProps = {
  files: IStageFile[];
  handleUpload: () => void;
  updateImage: (data: IStageFile, index: number) => void;
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
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  const auth = useAuth();

  const selectImage = (index: number) => {
    setSelected(index);
  };

  const displayModal = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };

  const focusOnImage = (index: number) => {
    if (imageCardRefs.current[index] && imageCardRefs.current[index].current) {
      const y = imageCardRefs.current[index].current?.getBoundingClientRect().y;
      if (y) {
        window.scrollTo({ top: window.scrollY + y - 100, behavior: "smooth" });
      }
    }
  };

  const uploadFiles = () => {
    const handleCompletion = () => {
      setCompleted(true);
    };

    const handleProgress = (value: number, index: number) => {
      let newProgress = [...progress];
      newProgress[index] = value;
      setProgress(newProgress);
    };

    files.forEach((file, index) => {
      if (auth.user)
        uploadImage(
          file,
          auth.user,
          () => console.log,
          handleCompletion,
          (progress) => handleProgress(progress, index)
        );
    });
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
      <UploadBar
        files={files}
        displayModal={displayModal}
        completed={completed}></UploadBar>
      {showModal &&
        createPortal(
          <UploadModal
            closeModal={hideModal}
            progress={progress}
            uploadFiles={uploadFiles}
          />,
          document.body
        )}
    </StyledFilesPanel>
  );
};
