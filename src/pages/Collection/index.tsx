import { Unsubscribe } from "firebase/database";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AiFillEdit } from "react-icons/ai";
import { IoPersonCircle } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { Gallery } from "../../components/Gallery";
import { Modal } from "../../components/Modal";
import { Nav } from "../../components/Nav";
import { useAuth } from "../../contexts/AuthContext";
import { ICollection, IPhoto, IUser } from "../../interfaces";
import {
  deleteCollection,
  fetchUser,
  listenForCollection,
  listenForImage,
  updateCollection,
} from "../../services/firebase";
import { Footer } from "../../components/Footer";
import { StyledCollection, StyledCollectionEditor } from "./styles";

export const Collection: React.FC = () => {
  const { user } = useAuth();
  const { uid } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState<ICollection>();
  const [images, setImages] = useState<IPhoto[]>([]);
  const [author, setAuthor] = useState<IUser>();
  const [editorEnabled, setEditorEnabled] = useState(false);

  const closeModal = () => {
    setEditorEnabled(false);
  };

  useEffect(() => {
    if (uid) {
      return listenForCollection(
        uid,
        (uC: ICollection) => {
          setCollection(uC);
        },
        (err) => {
          if (err == "404") {
            navigate("/404");
          }
        }
      );
    }
  }, [uid]);

  useEffect(() => {
    const unsubscribeArr: Unsubscribe[] = [];
    if (collection) {
      if (collection.content) {
        //Fetches the images in the Collection
        for (const v in collection.content) {
          unsubscribeArr.push(
            listenForImage(collection.content[v].uid, (imageSnapshot) => {
              const image = imageSnapshot;
              setImages((prevImages) => {
                const index = prevImages.findIndex(
                  (img) =>
                    img &&
                    collection.content &&
                    img.uid === collection.content[v].uid
                );
                if (index !== -1) {
                  const newImages = [...prevImages];
                  newImages[index] = image;
                  return newImages;
                } else {
                  return [...prevImages, image];
                }
              });
            })
          );
        }
      }

      //Fetches the user (owner of the Collection)
      fetchUser(collection.authorUID).then((user) => {
        setAuthor(user);
      });
    }

    return () => {
      unsubscribeArr.forEach((unsubscribe) => unsubscribe());
    };
  }, [collection]);

  if (!collection) return null;
  return (
    <>
      <Nav position="fixed" searchBarEnabled />
      <StyledCollection>
        <div id="title-section">
          {user && user.uid === collection.authorUID && (
            <button id="edit-btn" onClick={() => setEditorEnabled(true)}>
              <AiFillEdit size={24} />
            </button>
          )}
          <div id="title">{collection.title}</div>
          <div id="description">{collection.description}</div>
        </div>
        <div id="content-section">
          <div id="content-header">
            <div id="user-info">
              <span
                id="author-link"
                role="link"
                tabIndex={-1}
                onClick={() => navigate("/profile/" + collection.authorUID)}
                onKeyDown={() => navigate("/profile/" + collection.authorUID)}>
                {author?.photoURL ? (
                  <img src={author.photoURL} alt="Author"></img>
                ) : (
                  <IoPersonCircle size="60px" />
                )}
                <span>{author?.displayName}</span>
              </span>
            </div>
            <div id="collection-count">
              {collection.contentCount !== 1
                ? `${collection.contentCount} photos`
                : `${collection.contentCount} photo`}
            </div>
          </div>
          <Gallery images={images} />
        </div>
      </StyledCollection>
      <Footer />
      {editorEnabled &&
        createPortal(
          <Modal
            closePopup={() => setEditorEnabled(false)}
            closeOnClickOutside
            showCloseButton>
            <CollectionEditor collection={collection} closeModal={closeModal} />
          </Modal>,
          document.body
        )}
    </>
  );
};

const CollectionEditor: React.FC<{
  collection: ICollection;
  closeModal: () => void;
}> = ({ collection, closeModal }) => {
  const [title, setTitle] = useState(collection.title);
  const [description, setDescription] = useState(collection.description);
  const [page, setPage] = useState<"formPage" | "deletePage">("formPage");
  const navigate = useNavigate();

  let renderedContent;

  const updateCol = async () => {
    try {
      await updateCollection(collection.uid, title, description);
      closeModal();
    } catch (err) {
      console.error("Failed to delete the collection!");
    }
  };

  const deleteCol = async () => {
    try {
      await deleteCollection(collection.uid);
      navigate(`/profile/${collection.authorUID}`);
    } catch (err) {
      console.error("Failed to delete the collection!");
    }
  };

  switch (page) {
    case "formPage":
      renderedContent = (
        <>
          <div id="modal-title">Delete Collection</div>
          <form
            id="edit-collection-form"
            onSubmit={(e) => {
              e.preventDefault();
              updateCol();
            }}>
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
            <label id="field-description">
              Description
              <input
                type="text"
                maxLength={65}
                value={description}
                onChange={(descriptionValue) =>
                  setDescription(descriptionValue.target.value)
                }></input>
            </label>
            <div id="buttons-container">
              <button type="submit" id="update-button">
                Update Collection
              </button>
              <button
                type="button"
                id="delete-button"
                onClick={() => setPage("deletePage")}>
                Delete
              </button>
            </div>
          </form>
        </>
      );
      break;
    case "deletePage":
      renderedContent = (
        <>
          <div id="modal-title">Are you sure?</div>
          <div id="buttons-container">
            <button
              type="button"
              id="delete-button"
              onClick={() => deleteCol()}>
              Delete Collection
            </button>
            <button
              type="button"
              id="back-button"
              onClick={() => setPage("formPage")}>
              Back
            </button>
          </div>
        </>
      );
      break;
  }

  return <StyledCollectionEditor>{renderedContent}</StyledCollectionEditor>;
};
