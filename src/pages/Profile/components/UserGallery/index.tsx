import { Unsubscribe } from "firebase/database";
import { useEffect, useState } from "react";
import { Gallery } from "../../../../components/Gallery";
import { IPhoto, IUser } from "../../../../interfaces";
import { listenForImage } from "../../../../services/firebase";
import { StyledUserGallery } from "./styles";

export const UserGallery: React.FC<{ user?: IUser }> = ({ user }) => {
  const [images, setImages] = useState<IPhoto[]>([]);

  useEffect(() => {
    if (user && user.gallery) {
      const unsubscribeArr: Unsubscribe[] = [];
      for (const v in user.gallery) {
        unsubscribeArr.push(
          listenForImage(user.gallery[v].uid, (imageSnapshot) => {
            const image = imageSnapshot;
            setImages((prevImages) => {
              const index = prevImages.findIndex(
                (img) => img && user.gallery && img.uid === user.gallery[v].uid
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
      return () => {
        unsubscribeArr.forEach((unsubscribe) => unsubscribe());
      };
    }
  }, [user]);

  return (
    <StyledUserGallery>
      {images.length ? (
        <Gallery images={images} />
      ) : (
        <div id="empty-message">
          It looks like there are no images here yet 😢
        </div>
      )}
    </StyledUserGallery>
  );
};
