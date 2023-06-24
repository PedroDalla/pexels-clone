import { Unsubscribe } from "firebase/database";
import { useEffect, useState } from "react";
import { BiImages } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { ICollection, IPhoto } from "../../../../../interfaces";
import {
  fetchCollection,
  listenForImage,
} from "../../../../../services/firebase";
import { StyledCollectionThumbnail } from "./styles";

export const CollectionThumbnail: React.FC<{ collectionUID: string }> = ({
  collectionUID,
}) => {
  const [collection, setCollection] = useState<ICollection>();
  const [thumbnailImgs, setThumbnailImgs] = useState<IPhoto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCollection(collectionUID).then((collection: ICollection) =>
      setCollection(collection)
    );
  }, [collectionUID]);

  useEffect(() => {
    const unsubscriptions: Unsubscribe[] = [];
    if (collection && collection.content) {
      //Fetch the first three images from the collection
      const imageUIDs: string[] = [];
      Object.values(collection.content).forEach((val) =>
        imageUIDs.push(val.uid)
      );
      if (imageUIDs.length) {
        for (let index = 0; index < imageUIDs.length && index <= 2; index++) {
          const uid = imageUIDs[index];
          unsubscriptions.push(
            listenForImage(uid, (image) => {
              setThumbnailImgs((tImgs) => {
                const newThumbnailImgs = [...tImgs];
                const indexOfImage = newThumbnailImgs.findIndex(
                  (tImg) => tImg.uid === uid
                );
                if (indexOfImage !== -1) {
                  newThumbnailImgs[indexOfImage] = image;
                } else {
                  newThumbnailImgs.push(image);
                }
                return newThumbnailImgs;
              });
            })
          );
        }
      }
    }
  }, [collection]);

  if (!collection) return null;
  return (
    <StyledCollectionThumbnail
      imageCount={thumbnailImgs.length}
      onClick={() => navigate(`/collection/${collectionUID}`)}>
      <div className="collection-thumbnail">
        <div className="collection-images-container">
          {thumbnailImgs.length > 0 ? (
            thumbnailImgs.map((tImg, index) => (
              <div key={index}>
                <img src={tImg.small} alt="" />
              </div>
            ))
          ) : (
            <div className="empty-collection"></div>
          )}
        </div>
      </div>
      <div className="ct-text">
        <div className="ct-title">{collection.title}</div>
        <div className="ct-count">
          <BiImages size={24} />
          <span>{collection.contentCount}</span>
        </div>
      </div>
    </StyledCollectionThumbnail>
  );
};
