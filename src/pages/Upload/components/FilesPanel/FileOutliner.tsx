import { GoPlus } from "react-icons/go";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Tooltip } from "../../../../components/Tooltip";
import styled from "styled-components";
import { UploadFile } from "../..";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";

const StyledFileOutliner = styled.div`
width: 90px;
flex-shrink: 0;

@media (max-width: 900px) {
  width: auto;
  height: 90px;
}

#outliner {
  position: fixed;

  #ovflow-wrapper {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 170px);
    overflow-y: overlay;

    &::-webkit-scrollbar {
      width: 0;
    }

    @media (max-width: 900px) {
      max-height: auto;
      overflow-x: overlay;
      flex-direction: row;
      width: auto;
    }
  }

  @media (max-width: 900px) {
    position: static;

    div.outline-container {
      margin-bottom: 0;

      &:not(:last-child) {
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

    &.selected {
      border: 3px solid #05a081;
    }

    &.error.selected {
      border: 3px solid #d3405c;
    }

    &.error {
      button {
        .btn-overlay {
          background-color: rgba(211, 64, 92, 0.8);
        }
      }
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      color: #7f7f7f;
      padding: 0;

      border-radius: 6px;
      outline: none;
      border: none;

      cursor: pointer;

      background-position: center;
      background-size: cover;

      .btn-overlay {
        width: 100%;
        height: 100%;
        border-radius: 6px;
        color: white;

        margin: 0;
        z-index: 2;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &#add-photo {
      border: 0;
      flex-shrink: 0;
      button {
        background: #f7f7f7;
      }
    }
  }
}
`;
const StyledTooltip = styled.div`
font-size: 16px;
font-family: "Poppins";
padding: 15px;
background: #d3405c;
border-radius: 10px;
white-space: nowrap;

@media (max-width: 900px) {
  white-space: normal;
}

color: white;
`;
const StyledButton = styled.button<{ background: string }>`
background-image: ${(p) => p.background || ""};
`;


type FileOutlinerProps = {
    files: UploadFile[];
    handleUpload: () => void;
    selected: number;
    selectImage: (index: number) => void;
    focusOnImage: (index: number) => void;
};

export const FileOutliner: React.FC<FileOutlinerProps> = ({
    files,
    handleUpload,
    selected,
    selectImage,
    focusOnImage,
}) => {
    const [mobile, setMobile] = useState(false);

    const handleClick = (index: number) => {
        selectImage(index);
        focusOnImage(index);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 900 && mobile) {
                setMobile(false);
            } else if (window.innerWidth <= 900 && !mobile) {
                setMobile(true);
            }
        });

        if (window.innerWidth > 900) {
            setMobile(false);
        } else if (window.innerWidth <= 900) {
            setMobile(true);
        }
    }, []);

    useLayoutEffect(() => {
        if (refs.current[selected]) {
            refs.current[selected].current?.scrollIntoView({
                block: "center",
                inline: "center",
            });
        }
    }, [selected]);

    const tooltipArrowPosition = mobile ? { top: -3 } : { left: -3 };
    const refs = useRef<React.RefObject<HTMLDivElement>[]>([]);

    return (
        <StyledFileOutliner>
            <div id="outliner">
                <div id="ovflow-wrapper">
                    <div id="add-photo" className="outline-container">
                        <button onClick={handleUpload}>
                            <GoPlus size={24}></GoPlus>
                        </button>
                    </div>
                    {files.map((file, index) => {
                        refs.current[index] = createRef<HTMLDivElement>();
                        return (
                            <Tooltip
                                ref={refs.current[index]}
                                tooltipContent={
                                    file.message ? (
                                        <StyledTooltip>{file.message}</StyledTooltip>
                                    ) : null
                                }
                                activateOn="hover"
                                activateIf={file.error}
                                delay={100}
                                placement={!mobile ? "right" : "bottom-start"}
                                arrowOptions={{
                                    size: 14,
                                    background: "#D3405C",
                                    ...tooltipArrowPosition,
                                }}>
                                <div
                                    key={index}
                                    className={`outline-container ${file.error ? "error" : ""} ${index === selected ? "selected" : ""
                                        }`}>
                                    <StyledButton
                                        background={"url(" + file.data + ")"}
                                        onClick={() => handleClick(index)}>
                                        <div className="btn-overlay">
                                            {file.error && (
                                                <BsFillExclamationTriangleFill
                                                    size={24}></BsFillExclamationTriangleFill>
                                            )}
                                        </div>
                                    </StyledButton>
                                </div>
                            </Tooltip>
                        );
                    })}
                </div>
            </div>
        </StyledFileOutliner>
    );
};