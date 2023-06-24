import { Unsubscribe } from "firebase/database";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  AiFillCheckCircle,
  AiOutlineCloseCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { IoImageOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ICollection, IPhoto, IUser } from "../../interfaces";
import {
  addImageToCollection,
  createNewCollection,
  listenForCollection,
  listenForImage,
  removeImageFromCollection,
} from "../../services/firebase";
import { Modal } from "../Modal";
import { StyledCollectionsModal, StyledNewCollectionModal } from "./styles";

type CollectionsModalProps = {
  imageUID: string;
};

export const CollectionsModal: React.FC<CollectionsModalProps> = ({
  imageUID,
}) => {
  const [showAddCollectionModal, setShowAddCollectionModal] = useState(false);
  const { user } = useAuth();
  if (!user) return null;

  const hideModal = () => {
    setShowAddCollectionModal(false);
  };

  return (
    <StyledCollectionsModal>
      <div id="cm-header">
        <div id="cm-title">Save to collection</div>
        <Link to={`/profile/${user.uid}/collections`}>All collections</Link>
      </div>
      <div id="collection-grid">
        <div className="user-collection" id="add-new-collection">
          <div className="uc-image-container">
            <div className="uc-overlay">
              <button onClick={() => setShowAddCollectionModal(true)}>
                <AiOutlinePlusCircle size={44} />
              </button>
            </div>
          </div>
          <div className="uc-title">Add New Collection</div>
        </div>
        {user.collections &&
          Object.values(user.collections).map((collection, index) => (
            <UserCollection
              key={index}
              collectionUID={collection.uid}
              currentPhotoUID={imageUID}
            />
          ))}
      </div>
      {showAddCollectionModal &&
        createPortal(
          <Modal closeOnClickOutside showCloseButton closePopup={hideModal}>
            <AddCollectionModal user={user} closeModal={hideModal} />
          </Modal>,
          document.body
        )}
    </StyledCollectionsModal>
  );
};

const UserCollection: React.FC<{
  collectionUID: string;
  currentPhotoUID: string;
}> = ({ collectionUID, currentPhotoUID }) => {
  const [hover, setHover] = useState(false);
  const [collection, setCollection] = useState<ICollection>();
  const [thumbnailImage, setThumbnailImage] = useState<IPhoto>();
  const [waitingForServer, setWaitingForServer] = useState(false);

  //Updates the userCollections state array according to the user data
  useEffect(() => {
    const unsubscribe = listenForCollection(
      collectionUID,
      (uC: ICollection) => {
        setCollection(uC);
      }
    );
    return () => unsubscribe();
  }, [collectionUID]);

  useEffect(() => {
    let unsubscribe: Unsubscribe;
    if (collection && collection.content) {
      const collectionContent = Object.values(collection.content);
      const lastCollectionImage =
        collectionContent[collectionContent.length - 1];
      unsubscribe = listenForImage(lastCollectionImage.uid, (image) => {
        if (image) {
          setThumbnailImage(image);
        } else {
          setThumbnailImage(undefined);
        }
      });
      return () => {
        unsubscribe();
      };
    }
  }, [collection]);

  const addImage = () => {
    if (collection && !waitingForServer) {
      setWaitingForServer(true);
      addImageToCollection(collection.uid, currentPhotoUID).then(() =>
        setWaitingForServer(false)
      );
    }
  };

  const removeImage = () => {
    if (collection && !waitingForServer) {
      setWaitingForServer(true);
      removeImageFromCollection(collection.uid, currentPhotoUID).then(() =>
        setWaitingForServer(false)
      );
    }
  };

  if (!collectionUID || !collection) return null;
  return (
    <div className="user-collection">
      <div className="uc-image-container">
        {collection.content && thumbnailImage ? (
          <img src={thumbnailImage.small} alt="" />
        ) : (
          <div className="empty-collection-image">
            <IoImageOutline size={44} />
          </div>
        )}
        {collection.content &&
        Object.values(collection.content).find(
          (cc) => cc.uid === currentPhotoUID
        ) ? (
          <div
            className="uc-overlay added"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <button onClick={() => removeImage()}>
              {!hover ? (
                <AiFillCheckCircle size={44} />
              ) : (
                <AiOutlineCloseCircle size={44} />
              )}
            </button>
          </div>
        ) : (
          <div className="uc-overlay">
            <button onClick={() => addImage()}>
              <AiOutlinePlusCircle size={44} />
            </button>
          </div>
        )}
      </div>
      <div className="uc-title">{collection.title}</div>
    </div>
  );
};

const AddCollectionModal: React.FC<{
  user: IUser;
  closeModal: () => void;
}> = ({ user, closeModal }) => {
  const [title, setTitle] = useState("");

  const createCol = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createNewCollection(user.uid, title);
    closeModal();
  };

  return (
    <StyledNewCollectionModal>
      <div id="modal-title">Delete Collection</div>
      <form id="edit-collection-form" onSubmit={(e) => createCol(e)}>
        <label id="field-title">
          Title
          <input
            type="text"
            value={title}
            required
            maxLength={30}
            onChange={(titleValue) =>
              setTitle(titleValue.target.value)
            }></input>
        </label>
        <div id="buttons-container">
          <button type="button" id="close-button" onClick={() => closeModal()}>
            Back
          </button>
          <button type="submit" id="update-button">
            Create Collection
          </button>
        </div>
      </form>
    </StyledNewCollectionModal>
  );
};
