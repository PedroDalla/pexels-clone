import { StyledImage } from "./styles";
import { FiDownload, FiBookmark, FiHeart } from "react-icons/fi";

import { IPhoto, IUser } from "../../interfaces";
import { IoPersonCircle } from "react-icons/io5";
import { FC, useEffect, useMemo, useState } from "react";
import { listenForUser, setImageLike } from "../../services/firebase";
import { useAuth } from "../../contexts/AuthContext";
import { downloadURL } from "../../utils/downloadURI";
import { useNavigate } from "react-router-dom";

interface ImageProps {
  imageInfo: IPhoto;
  setIndex: Function;
}

export const Image: FC<ImageProps> = ({ imageInfo, setIndex }) => {
  const [photographer, setPhotographer] = useState<IUser>();
  const { user } = useAuth();
  const navigate = useNavigate();

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
  }, []);

  const handleLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (user) {
      setImageLike(imageInfo.uid, user.uid, !liked);
    }
  };

  return (
    <StyledImage
      onClick={() => {
        setIndex();
      }}>
      <img src={imageInfo.small}></img>
      <div id="photo-controls">
        <div id="controls-header" className="control-buttons">
          <button>
            <FiBookmark size="18px"></FiBookmark>
          </button>
          <button
            onClick={(e) => handleLike(e)}
            className={`like-btn${liked ? " liked" : ""}`}>
            <FiHeart size="18px"></FiHeart>
          </button>
        </div>
        <div id="controls-footer">
          <a
            id="author-link"
            onClick={() => navigate("/profile:" + imageInfo.photographerUID)}>
            {photographer?.photoURL ? (
              <img src={photographer.photoURL} alt="Author"></img>
            ) : (
              <IoPersonCircle size="44px" />
            )}
            <span>{photographer?.displayName}</span>
          </a>
          <div className="control-buttons">
            <button
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
  );
};
