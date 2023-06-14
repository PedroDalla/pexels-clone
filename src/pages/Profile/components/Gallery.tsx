import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContentExplorer } from "../../../components/ContentExplorer";
import { IPhoto } from "../../../interfaces";
import {
  fetchUserGallery,
  getImageURL,
  listenForImage,
} from "../../../services/firebase";

const StyledGallery = styled.div``;

export const Gallery: React.FC<{ uid?: string }> = ({ uid }) => {
  const [images, setImages] = useState<IPhoto[]>([]);

  useEffect(() => {
    if (uid)
      fetchUserGallery(uid).then((results) => {
        for (let v in results) {
          listenForImage(results[v].uid, (imageSnapshot) => {
            //If the image already exists, only replace it
            let image = imageSnapshot.val();
            const index = images.findIndex((img) => img.uid === results[v].uid);
            if (index != -1) {
              const newImages = [...images];
              newImages[index] = image;
              setImages(newImages);
            } else {
              getImageURL(image.uid).then((url) => {
                image.url = url;
                setImages((images) => [...images, image]);
              });
            }
          });
        }
      });
  }, [uid]);

  //   useEffect(() => {
  //     images.forEach(image => {
  //         getImageURL(image.uid).then(url => {

  //         })
  //     })
  //   }, [images]);

  return (
    <StyledGallery>
      <ContentExplorer images={images} />
    </StyledGallery>
  );
};
