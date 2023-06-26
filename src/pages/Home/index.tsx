import { useEffect, useMemo, useState } from "react";

import { Nav } from "../../components/Nav";
import { Hero } from "../../components/Hero";
import { Navigator } from "../../components/Navigator";
import { Gallery } from "../../components/Gallery";
import { fetchImagesPaginated, listenForImage } from "../../services/firebase";
import { IPhoto } from "../../interfaces";
import { Unsubscribe } from "firebase/database";
import { StyledHome, StyledNavigatorWrapper } from "./styles";
import { Link } from "react-router-dom";

export function Home() {
  const [showNavSearchBar, setShowNavSearchBar] = useState(false);
  const [lastImageBatch, setLastImageBatch] = useState<IPhoto[]>([]);
  const [lastPaginationIndex, setLastPaginationIndex] = useState<string>();
  const [images, setImages] = useState<IPhoto[]>([]);
  const [unsubscriptions, setUnsubscriptions] = useState<Unsubscribe[]>([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    fetchImagesPaginated(10).then((val: IPhoto[]) => {
      setLastImageBatch(val);
      setFetching(false);
    });
    setFetching(true);

    return () => {
      unsubscriptions.forEach((unsubscribe) => unsubscribe());
    };
  }, []);

  useEffect(() => {
    //Save the last index fetched for pagination
    const imagesLength = lastImageBatch.length;
    if (imagesLength) {
      setLastPaginationIndex(lastImageBatch[imagesLength - 1].key);
    }

    //Fetches the images and sets an event listener for changes
    const unsubscribeArr: Unsubscribe[] = [];
    for (const v in lastImageBatch) {
      unsubscribeArr.push(
        listenForImage(lastImageBatch[v].uid, (imageSnapshot) => {
          const image = imageSnapshot;
          setImages((prevImages) => {
            const index = prevImages.findIndex(
              (img) => img && img.uid === lastImageBatch[v].uid
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

    //Saves the Unsubscribe() of each image listener for use when unmounting
    setUnsubscriptions((unsubscriptions) => [
      ...unsubscriptions,
      ...unsubscribeArr,
    ]);
  }, [lastImageBatch]);

  const handleScroll = useMemo(
    () => () => {
      if (fetching) {
        return;
      }
      fetchImagesPaginated(10, lastPaginationIndex).then((val: IPhoto[]) => {
        if (images.length) {
          setImages((images) => [...images, ...val]);
        } else {
          setImages(val);
        }
        setFetching(false);
      });
      setFetching(true);
    },
    [lastPaginationIndex, fetching]
  );

  window.addEventListener("scroll", () => {
    setShowNavSearchBar(window.scrollY > 100);
  });

  return (
    <StyledHome>
      <Nav
        searchBarEnabled={showNavSearchBar}
        transparentBackground={!showNavSearchBar}></Nav>
      <Hero></Hero>
      <StyledNavigatorWrapper>
        <Navigator>
          <li className="selected">
            <Link to="/">Home</Link>
          </li>
          <li className="disabled">Discover</li>
        </Navigator>
      </StyledNavigatorWrapper>
      <div id="gallery-container">
        <div id="gallery-title">Free Stock Photos</div>
        <Gallery images={images} onScroll={() => handleScroll()} />
      </div>
    </StyledHome>
  );
}
