import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseOutline, IoPersonCircle } from "react-icons/io5";
import { detectClickOutside } from "../../utils/detectClickOutside";
import { StyledContentVisualizer, StyledDownloadOptions } from "./styles";
import {
  AiFillCheckCircle,
  AiOutlineHeart,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiBookmarks } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { IPhoto, IUser } from "../../interfaces";
import { listenForUser, setImageLike } from "../../services/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { Tooltip } from "../Tooltip";
import { downloadURL } from "../../utils/downloadURI";

interface ContentVisualizerProps {
  content: IPhoto;
  hideVisualizer: () => void;
}

export const ContentVisualizer: React.FC<ContentVisualizerProps> = ({
  content,
  hideVisualizer,
}) => {
  const [zoomed, setZoomed] = useState(false);
  const popupElement = useRef(null);
  const [photographer, setPhotographer] = useState<IUser>();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = listenForUser(content.photographerUID, (snapshot) => {
      setPhotographer(snapshot.val());
    });
    return () => unsubscribe();
  }, []);

  const liked = useMemo(() => {
    if (user && user.likes) {
      if (user.likes[content.uid]) return true;
    }
    return false;
  }, [user]);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (user) {
      setImageLike(content.uid, user.uid, !liked);
    }
  };
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
    (event: MouseEvent, image: EventTarget & HTMLElement) => {
      const X = (event.clientX * 100) / document.body.clientWidth;
      const Y = (event.clientY * 100) / document.body.clientHeight;
      image.style.transform = `scale(3) translate(${-(X - 50)}%, ${-(
        Y - 50
      )}%)`;
    },
    []
  );

  const mouseMoveWrapper = useRef<(event: MouseEvent) => void>();

  const handleZoom = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const child = e.currentTarget.firstChild;
    let image: HTMLImageElement | null = null;
    if (child && child instanceof HTMLImageElement) {
      image = child;
    }

    const disableZoom = () => {
      if (image) {
        if (mouseMoveWrapper.current) {
          document.body.removeEventListener(
            "mousemove",
            mouseMoveWrapper.current
          );
        }
        image.style.transform = "none";
        image.style.cursor = "zoom-in";
        setZoomed(false);
      } else {
        setZoomed(false);
      }
    };
    if (zoomed) {
      disableZoom();
    } else {
      if (image) {
        mouseMoveWrapper.current = (event: MouseEvent) => {
          if (image) return onMouseMove(event, image);
        };

        const X = (e.clientX * 100) / document.body.clientWidth;
        const Y = (e.clientY * 100) / document.body.clientHeight;
        image.style.transform = `scale(3) translate(${-(X - 50)}%, ${-(
          Y - 50
        )}%)`;
        image.style.cursor = "zoom-out";

        const handleBodyClick = (e: MouseEvent) => {
          e.preventDefault();
          document.body.removeEventListener("mousedown", handleBodyClick);
          disableZoom();
        };
        document.body.addEventListener("mousemove", mouseMoveWrapper.current);
        document.body.addEventListener("mousedown", handleBodyClick);
        setZoomed(true);
      }
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
              {photographer && photographer.photoURL ? (
                <Link to={`/profile:${photographer.uid}`}>
                  <img
                    alt="user"
                    src={photographer.photoURL}
                    referrerPolicy="no-referrer"></img>
                </Link>
              ) : photographer ? (
                <Link to={`/profile:${photographer.uid}`}>
                  <IoPersonCircle size="54px" />
                </Link>
              ) : (
                <IoPersonCircle size="54px" />
              )}
            </div>
            <div id="author-details">
              <div id="author-title">
                {photographer && (
                  <Link to={`/profile:${photographer.uid}`}>
                    {photographer.displayName}
                  </Link>
                )}
              </div>
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
            <button
              onClick={(e) => handleLike(e)}
              className={`like-btn${liked ? " liked" : ""}`}>
              <FiHeart size={22} />
              Like <span id="like-count">{content.likes}</span>
            </button>
            <button
              className="download-btn"
              onClick={() => {
                downloadURL(content.medium, "Pexels Image.png");
              }}>
              Free download
            </button>
            <Tooltip
              tooltipContent={<DownloadOptions imageInfo={content} />}
              activateOn="click"
              arrowOptions={{ top: -2 }}>
              <button className="download-options-btn">
                <IoIosArrowDown></IoIosArrowDown>
              </button>
            </Tooltip>
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
          <div
            id="image-container"
            role="button"
            onMouseDown={(e) => handleZoom(e)}
            tabIndex={-1}
            className={imageLoaded ? "show" : "hide"}>
            <img
              alt=""
              src={content.blur}
              className={imageLoaded ? "hide" : "show"}
            />
            <img
              src={content.original}
              alt=""
              className={imageLoaded ? "show" : "hide"}
              onLoad={() => setImageLoaded(true)}></img>
          </div>
        </div>
        <div id="image-footer">
          <span id="free-use-btn">
            <AiFillCheckCircle size={18}></AiFillCheckCircle>Free to use
          </span>
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
              {photographer && photographer.photoURL ? (
                <img
                  alt="user"
                  src={photographer.photoURL}
                  referrerPolicy="no-referrer"></img>
              ) : (
                <IoPersonCircle size="40px" />
              )}
            </div>
            <div id="author-title-mobile">
              {photographer && (
                <Link to={`/profile:${photographer.uid}`}>
                  {photographer.displayName}
                </Link>
              )}
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

const DownloadOptions: React.FC<{ imageInfo: IPhoto }> = ({ imageInfo }) => {
  const [selected, setSelected] = useState<string>("");

  const handleDownload = () => {
    if (selected !== "") {
      switch (selected) {
        case "Original":
          downloadURL(imageInfo.original, "Pexels Image.png");
          break;
        case "Medium":
          downloadURL(imageInfo.medium, "Pexels Image.png");
          break;
        case "Small":
          downloadURL(imageInfo.small, "Pexels Image.png");
          break;
        default:
          break;
      }
    }
  };

  return (
    <StyledDownloadOptions>
      <div className="title">Choose a size:</div>
      <ul className="options">
        <li
          className={`option-item${
            selected === "Original" ? " selected" : ""
          }`}>
          <span
            onClick={() => setSelected("Original")}
            onKeyDown={(e) => e.key === "Enter" && setSelected("Original")}
            tabIndex={-1}
            role="link">
            Original
          </span>
        </li>

        <li
          className={`option-item${selected === "Medium" ? " selected" : ""}`}>
          <span
            onClick={() => setSelected("Medium")}
            onKeyDown={(e) => e.key === "Enter" && setSelected("Medium")}
            tabIndex={-1}
            role="link">
            Medium
          </span>
        </li>

        <li className={`option-item${selected === "Small" ? " selected" : ""}`}>
          <span
            onClick={() => setSelected("Small")}
            onKeyDown={(e) => e.key === "Enter" && setSelected("Small")}
            tabIndex={-1}
            role="link">
            Small
          </span>
        </li>
      </ul>
      <div className="download-btn-container">
        <button
          className="download-btn full"
          disabled={selected === ""}
          onClick={() => handleDownload()}>
          Download Selected Size
        </button>
      </div>
    </StyledDownloadOptions>
  );
};
