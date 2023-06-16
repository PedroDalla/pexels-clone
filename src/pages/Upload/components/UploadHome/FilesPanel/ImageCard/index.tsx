import { forwardRef, useEffect, useRef, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { IStageFile } from "../../../../../../interfaces";
import { StyledImageCard } from "./styles";

type ImageCardProps = {
  file: IStageFile;
  imageIndex: number;
  selected: number;
  updateImage: (data: IStageFile, index: number) => void;
  deleteImage: (index: number) => void;
  key: string | number;
  selectImage: (index: number) => void;
  replaceImage: (index: number) => void;
};

export const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  (
    {
      file,
      deleteImage,
      selected,
      imageIndex,
      updateImage,
      selectImage,
      replaceImage,
    },
    forwardedRef
  ) => {
    const [hide, setHide] = useState(false);

    const handleImageLoad = (
      e: React.SyntheticEvent<HTMLImageElement, Event>,
      file: IStageFile,
      index: number
    ) => {
      let error = false;
      let message = undefined;
      const width = e.currentTarget.naturalWidth;
      const height = e.currentTarget.naturalHeight;
      if ((width * height) / 1000000 < 2) {
        error = true;
        message =
          "Uploads must be at least 2 megapixels in size. This image will not be published.";
      }

      const calculateGCD: (a: number, b: number) => number = (a, b) => {
        if (b === 0) {
          return a;
        }
        return calculateGCD(b, a % b);
      };

      const gcd = calculateGCD(width, height);
      const newFile: IStageFile = {
        ...file,
        ...{
          error: error,
          message: message,
          technical: {
            height: height,
            width: width,
            aspectRatio: `${width / gcd}:${height / gcd}`,
          },
        },
      };
      updateImage(newFile, index);
    };

    const elementRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
      const handleScroll = () => {
        if (elementRef && elementRef.current && window.outerWidth >= 900) {
          const y = elementRef.current.getBoundingClientRect().y - 100;
          if (y <= 100 && y >= -100) {
            selectImage(imageIndex);
          }
        }
      };

      const handleResize = () => {
        if (window.outerWidth <= 900) {
          if (selected !== imageIndex) {
            setHide(true);
          } else {
            setHide(false);
          }
        } else {
          setHide(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    useEffect(() => {
      setHide(window.innerWidth < 900 && selected !== imageIndex);
    }, [selected]);

    const handleInput = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: "title" | "location" | "tags"
    ) => {
      const newFile = file;
      newFile.optionalDetails[field] = e.target.value;
      return updateImage(newFile, imageIndex);
    };

    return (
      <StyledImageCard error={file.error} ref={forwardedRef} hide={hide}>
        <div className="image-card" ref={elementRef}>
          <div className="image-container">
            <img
              src={file.dataUrl}
              alt={file.data.name}
              onLoad={(e) => handleImageLoad(e, file, imageIndex)}></img>
          </div>
          <button
            className="remove-mobile"
            onClick={() => deleteImage(imageIndex)}>
            Remove photo
          </button>
          {file.error ? (
            <div className="error-container">
              <h3>Error</h3>
              <p>{file.message}</p>
              <button
                className="browse-error"
                onClick={() => replaceImage(imageIndex)}>
                Browse a new photo
              </button>
            </div>
          ) : (
            <div className="image-form-container">
              <form className="image-form">
                <div className="form-field">
                  <div className="form-label">
                    Title
                    <span className="form-label-optional">(optional)</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter title"
                    maxLength={45}
                    value={file.optionalDetails.title}
                    onChange={(e) => handleInput(e, "title")}></input>
                </div>
                <div className="form-field">
                  <div className="form-label">
                    Tags <span className="form-label-optional">(optional)</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter tags"
                    maxLength={45}
                    value={file.optionalDetails.tags}
                    onChange={(e) => handleInput(e, "tags")}></input>
                </div>
                <div className="form-field">
                  <div className="form-label">
                    Location
                    <span className="form-label-optional">(optional)</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter location"
                    maxLength={45}
                    value={file.optionalDetails.location}
                    onChange={(e) => handleInput(e, "location")}></input>
                </div>
                <div className="form-field">
                  <div className="form-label">
                    Challenges
                    <span className="form-label-optional">(unavailable)</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Select challenges"
                    maxLength={32}
                    disabled></input>
                </div>
              </form>
            </div>
          )}
        </div>
        <div className={`delete-container ${file.error && "error"}`}>
          <button onClick={() => deleteImage(imageIndex)}>
            <IoMdTrash size={32}></IoMdTrash>
          </button>
        </div>
      </StyledImageCard>
    );
  }
);
