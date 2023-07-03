import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { PhotoView } from "../../components/PhotoView";
import { IPhoto } from "../../interfaces";
import { listenForImage } from "../../services/firebase";
import { StyledPhoto } from "./styles";

export const Photo: React.FC = () => {
  const { uid } = useParams();
  const [content, setContent] = useState<IPhoto>();
  const navigate = useNavigate();
  useEffect(() => {
    if (uid) {
      listenForImage(uid, (image: IPhoto) => {
        setContent(image);
      });
    } else {
      navigate("/404");
    }
  }, [uid]);

  return (
    <StyledPhoto>
      <Nav />
      <main>{content && <PhotoView content={content} />}</main>
      <Footer />
    </StyledPhoto>
  );
};
