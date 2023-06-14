import { forwardRef, useEffect, useRef, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import styled from "styled-components";
import { IStageFile } from "../../../../interfaces";

const StyledImageCard = styled.div<{ error: boolean; hide: boolean }>`
  min-height: 360px;
  display: ${(p) => (p.hide ? "none" : "flex")};
  margin-bottom: 100px;

  @media (min-width: 901px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  .image-card {
    background: ${(p) => (p.error ? "#FBECEE" : "#F7F7F7")};
    padding: 50px 70px;
    margin-right: 30px;

    @media (max-width: 900px) {
      margin-right: 0;
      margin-bottom: 20px;
      background: #f7f7f7;
      padding: 10px;
    }

    border-radius: 20px;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      grid-gap: 30px;
    }

    font-family: "Poppins";

    h3 {
      font-size: 33px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
    }

    button {
      padding: 10px 30px;

      font-family: "Poppins";
      font-size: 16px;
      font-weight: 600;

      border-radius: 6px;
      outline: none;
      border: 0;
      cursor: pointer;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        border-radius: 10px;
        max-width: 100%;
      }
    }

    .remove-mobile {
      max-width: fit-content;
      margin: 0 auto;
      color: white;
      background: #d3405c;

      &:hover {
        background: #c23b55;
      }

      @media (min-width: 900px) {
        display: none;
      }
    }

    .image-form-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .image-form {
        font-family: "Poppins";
        width: 100%;

        .form-field {
          width: 100%;
          margin-bottom: 10px;

          .form-label {
            margin-bottom: 5px;
            font-weight: 500;
            font-size: 14px;
            color: #7f7f7f;

            .form-label-optional {
              color: #bfbfbf;
            }
          }

          input {
            border: none;
            outline: none;

            width: 100%;

            font-size: 16px;
            font-weight: 400;
            color: #4a4a4a;
            padding: 14px;
            border-radius: 6px;

            font-family: "Poppins";

            &::placeholder {
              color: #bfbfbf;
            }
          }
        }
      }
    }

    .error-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      font-family: "Poppins";
      color: #d3405c;

      @media (max-width: 900px) {
        background: #ebebeb;
        border-radius: 20px;
        padding: 30px;
      }

      h3 {
        margin: 0;
        margin-bottom: 15px;
      }

      p {
        margin-bottom: 30px;
      }

      button {
        color: white;
        background: #d3405c;

        &:hover {
          background: #c23b55;
        }
      }
    }
  }

  .delete-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;

    @media (max-width: 900px) {
      display: none;
    }

    button {
      width: 65px;
      height: 65px;
      outline: none;
      border: 0;
      border-radius: 50%;
      background: #f7f7f7;
      color: #c6c6c6;
      padding: 15px;
      cursor: pointer;

      &:hover {
        color: #7f7f7f;
      }
    }

    &.error {
      button {
        background: #d3405c;
        color: white;

        &:hover {
          background: #c23b55;
        }
      }
    }
  }
`;

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
      let width = e.currentTarget.naturalWidth;
      let height = e.currentTarget.naturalHeight;
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
      let newFile = file;
      newFile.optionalDetails[field] = e.target.value;
      return updateImage(newFile, imageIndex);
    };

    return (
      <StyledImageCard error={file.error} ref={forwardedRef} hide={hide}>
        <div className="image-card" ref={elementRef}>
          <div className="image-container">
            <img
              src={file.dataUrl}
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
