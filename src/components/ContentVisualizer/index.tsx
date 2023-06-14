import React, { useState, useEffect, useRef, useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { detectClickOutside } from "../../utils/detectClickOutside";
import { StyledContentVisualizer } from "./styles";
import {
  AiFillCheckCircle,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FiShare2 } from "react-icons/fi";
import { IPhoto } from "../../interfaces";

interface ContentVisualizerProps {
  content: IPhoto;
  hideVisualizer: Function;
}

export const ContentVisualizer = ({
  content,
  hideVisualizer,
}: ContentVisualizerProps): JSX.Element => {
  const [zoomed, setZoomed] = useState(false);
  const popupElement = useRef(null);

  const closeVisualizer = () => {
    if (zoomed) {
      setZoomed(false);
    }
    hideVisualizer();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const unsubscribe = detectClickOutside(popupElement, () => {
      closeVisualizer();
    });
    return () => {
      document.body.style.overflow = "auto";
      unsubscribe();
    };
  }, []);

  //Image zooming functionality
  const onMouseMove = useCallback(
    (event: MouseEvent, image: EventTarget & HTMLImageElement) => {
      const X = (event.clientX * 100) / document.body.clientWidth;
      const Y = (event.clientY * 100) / document.body.clientHeight;
      image.style.transform = `scale(3) translate(${-(X - 50)}%, ${-(
        Y - 50
      )}%)`;
    },
    []
  );

  const mouseMoveWrapper = useRef<(event: MouseEvent) => void>();

  const handleZoom = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const image = e.currentTarget;

    const disableZoom = () => {
      if (mouseMoveWrapper.current) {
        document.body.removeEventListener(
          "mousemove",
          mouseMoveWrapper.current
        );
      }
      image.style.transform = "none";
      image.style.cursor = "zoom-in";
      setZoomed(false);
    };
    if (zoomed) {
      disableZoom();
    } else {
      mouseMoveWrapper.current = (event: MouseEvent) =>
        onMouseMove(event, image);

      const X = (e.clientX * 100) / document.body.clientWidth;
      const Y = (e.clientY * 100) / document.body.clientHeight;
      image.style.transform = `scale(3) translate(${-(X - 50)}%, ${-(
        Y - 50
      )}%)`;
      image.style.cursor = "zoom-out";

      const handleBodyClick = (e: MouseEvent) => {
        e.preventDefault();
        document.body.removeEventListener("click", handleBodyClick);
        disableZoom();
      };
      document.body.addEventListener("mousemove", mouseMoveWrapper.current);
      document.body.addEventListener("click", handleBodyClick);
      setZoomed(true);
    }
  };

  return (
    <StyledContentVisualizer>
      <div id="outer-controls">
        <button id="close-popup-btn" onClick={() => closeVisualizer()}>
          <IoCloseOutline size={36}></IoCloseOutline>
        </button>
      </div>
      <div id="popup" ref={popupElement}>
        <div id="popup-header">
          <div id="author-info" className="hide-mobile">
            <div id="author-image">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GgiWS7fc0Qr3hY_qguvGVzfeDx-lM6ATyRAKV7Fcw=s96-c"></img>
            </div>
            <div id="author-details">
              {/* <div id="author-title">
                <Link to={content.photographer_url}>
                  {content.photographer}
                </Link>
              </div> */}
              <div id="follow-container">
                <button id="follow-btn">Follow</button>
              </div>
            </div>
          </div>
          <div className="header-buttons hide-mobile">
            <button className="collect-btn">
              <BiBookmarks size={22} />
              Collect
            </button>
            <button className="like-btn">
              <AiOutlineHeart size={22} />
              Like <span id="like-count">54</span>
            </button>
            <button className="download-btn">Free download</button>
            <button className="download-options-btn">
              <IoIosArrowDown></IoIosArrowDown>
            </button>
          </div>
          <div className="header-buttons show-mobile">
            <button className="collect-btn">
              <BiBookmarks size={22} />
            </button>
            <button className="like-btn">
              <AiOutlineHeart size={22} />
            </button>
          </div>
          <div className="header-buttons show-mobile">
            <button className="download-btn">Free download</button>
            <button className="download-options-btn">
              <IoIosArrowDown></IoIosArrowDown>
            </button>
          </div>
        </div>
        <div id="popup-content">
          <div id="image-container">
            {/* <img src={content.src.original} onClick={(e) => handleZoom(e)} /> */}
          </div>
        </div>
        <div id="image-footer">
          <a id="free-use-btn" href="/license">
            <AiFillCheckCircle size={18}></AiFillCheckCircle>Free to use
          </a>
          <div id="image-footer-controls">
            <button id="more-info-btn">
              <BsFillInfoCircleFill size={18}></BsFillInfoCircleFill>
              <span>More info</span>
            </button>
            <button id="share-btn">
              <FiShare2 size={18}></FiShare2>
              <span>Share</span>
            </button>
          </div>
        </div>
        <div id="author-panel">
          <div id="author-info-mobile">
            <div id="author-image-mobile">
              <img src="https://lh3.googleusercontent.com/a-/AOh14GgiWS7fc0Qr3hY_qguvGVzfeDx-lM6ATyRAKV7Fcw=s96-c"></img>
            </div>
            <div id="author-title-mobile">
              {/* <Link to={content.photographer_url}>{content.photographer}</Link> */}
            </div>
          </div>
          <div id="author-mobile-controls">
            <button id="follow-mobile-btn">
              <AiOutlineUserAdd size={20}></AiOutlineUserAdd>
            </button>
            <button id="donate-mobile-btn">Donate</button>
          </div>
        </div>
      </div>
    </StyledContentVisualizer>
  );
};
