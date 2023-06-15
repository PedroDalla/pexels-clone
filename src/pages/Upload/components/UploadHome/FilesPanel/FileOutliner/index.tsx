import { GoPlus } from "react-icons/go";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { Tooltip } from "../../../../../../components/Tooltip";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { IStageFile } from "../../../../../../interfaces";
import { StyledButton, StyledFileOutliner, StyledTooltip } from "./styles";

type FileOutlinerProps = {
  files: IStageFile[];
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
              <div className="outliner-button-container" key={index}>
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
                    className={`outline-container ${
                      file.error ? "error" : ""
                    } ${index === selected ? "selected" : ""}`}>
                    <StyledButton
                      background={"url(" + file.dataUrl + ")"}
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
              </div>
            );
          })}
        </div>
      </div>
    </StyledFileOutliner>
  );
};
