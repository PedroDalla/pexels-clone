import { StyledImage } from "./styles";
import { FiDownload, FiBookmark, FiHeart } from "react-icons/fi";

import { IPhoto, IUser } from "../../interfaces";
import { IoPersonCircle } from "react-icons/io5";
import { FC, useEffect, useMemo, useState } from "react";
import { listenForUser, setImageLike } from "../../services/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { downloadURL } from "../../utils/downloadURI";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { CollectionsModal } from "../CollectionsModal";
import { Modal } from "../Modal";

interface ImageProps {
  imageInfo: IPhoto;
  setIndex: () => void;
}

export const Image: FC<ImageProps> = ({ imageInfo, setIndex }) => {
  const [photographer, setPhotographer] = useState<IUser>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [collectionsModalEnabled, setCollectionsModalEnabled] = useState(false);

  const liked = useMemo(() => {
    if (user && user.likes) {
      if (user.likes[imageInfo.uid]) return true;
    }
    return false;
  }, [user]);

  useEffect(() => {
    return listenForUser(imageInfo.photographerUID, (snapshot) => {
      setPhotographer(snapshot.val());
    });
  }, [imageInfo.photographerUID]);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (user) {
      setImageLike(imageInfo.uid, user.uid, !liked);
    }
  };

  const showCollectionsModal = () => {
    setCollectionsModalEnabled(true);
  };

  const hideCollectionsModal = () => {
    setCollectionsModalEnabled(false);
  };

  return (
    <>
      <StyledImage
        tabIndex={0}
        onClick={() => {
          window.history.replaceState(null, "", `photo/${imageInfo.uid}`);
          setIndex();
        }}>
        <img
          src={imageInfo.small}
          alt={photographer?.displayName + "'s photograph" || ""}></img>
        <div id="photo-controls">
          <div id="controls-header" className="control-buttons">
            <button
              tabIndex={-1}
              onClick={(e) => {
                e.stopPropagation();
                showCollectionsModal();
              }}>
              <FiBookmark size="18px"></FiBookmark>
            </button>
            <button
              tabIndex={-1}
              onClick={(e) => handleLike(e)}
              className={`like-btn${liked ? " liked" : ""}`}>
              <FiHeart size="18px"></FiHeart>
            </button>
          </div>
          <div id="controls-footer">
            <span
              id="author-link"
              role="link"
              tabIndex={-1}
              onClick={() => navigate("/profile/" + imageInfo.photographerUID)}
              onKeyDown={() =>
                navigate("/profile/" + imageInfo.photographerUID)
              }>
              {photographer?.photoURL ? (
                <img src={photographer.photoURL} alt="Author"></img>
              ) : (
                <IoPersonCircle size="44px" />
              )}
              <span>{photographer?.displayName}</span>
            </span>
            <div className="control-buttons">
              <button
                tabIndex={-1}
                onClick={(e) => {
                  e.stopPropagation();
                  downloadURL(imageInfo.medium, "Pexels Image.png");
                }}>
                <FiDownload size="22px"></FiDownload>
              </button>
            </div>
          </div>
        </div>
      </StyledImage>
      {collectionsModalEnabled &&
        createPortal(
          <Modal
            closeOnClickOutside
            showCloseButton
            closePopup={() => hideCollectionsModal()}>
            <CollectionsModal imageUID={imageInfo.uid} />
          </Modal>,
          document.body
        )}
    </>
  );
};
