import { useState, useEffect, useRef, useMemo } from "react";
import { StyledContentExplorer } from "./styles";
import { Image } from "../Image/index";
import { IPhoto } from "../../interfaces";
import { ContentVisualizer } from "../ContentVisualizer";
import { createPortal } from "react-dom";

type ContentExplorerProps = {
  images: IPhoto[];
  onScroll?: () => void;
};

export const ContentExplorer: React.FC<ContentExplorerProps> = ({
  images,
  onScroll,
}) => {
  const element = useRef<HTMLDivElement>(null);

  const [columnCount, setColumnCount] = useState(2);
  const [index, setIndex] = useState<number | null>(null);

  const columns: Array<JSX.Element[]> = useMemo(() => {
    let cols: Array<JSX.Element[]> = [];
    if (images) {
      images.forEach((image, i) => {
        if (image) {
          let mod = i % columnCount;

          const imageElement = (
            <Image imageInfo={image} setIndex={() => setIndex(i)} key={i} />
          );
          if (cols[mod]) {
            cols[mod].push(imageElement);
          } else {
            cols[mod] = [imageElement];
          }
        }
      });
    }
    return cols;
  }, [images, columnCount]);

  function hideContentVisualizer() {
    setIndex(null);
  }

  //Only run on startup
  useEffect(() => {
    function calculateColumns() {
      let colNumber: number;
      if (window.innerWidth >= 2200) {
        colNumber = 4;
      } else if (window.innerWidth >= 1050) {
        colNumber = 3;
      } else if (window.innerWidth >= 650) {
        colNumber = 2;
      } else {
        colNumber = 1;
      }
      setColumnCount(colNumber);
    }
    //Adding event listener to window resize to adjust the ammount of columns to display in the explorer for responsiveness
    window.onresize = () => {
      calculateColumns();
    };

    calculateColumns();
  }, []);

  useEffect(() => {
    let unsubscribe: () => void;
    //Adding event listener to execute callback when reaching the bottom of the current gallery

    if (onScroll) {
      const handleScroll = () => {
        if (element.current) {
          if (window.scrollY > element.current.scrollHeight - 1500) {
            onScroll();
          }
        }
      };
      window.onscroll = handleScroll;
      unsubscribe = handleScroll;
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [onScroll]);

  return (
    <StyledContentExplorer>
      <div id="explorer-main" ref={element}>
        {columns.map((column, index) => (
          <div key={index} className="explorer-column">
            {column}
          </div>
        ))}
      </div>
      {index != null
        ? createPortal(
            <ContentVisualizer
              content={images[index]}
              hideVisualizer={hideContentVisualizer}
            />,
            document.body
          )
        : null}
    </StyledContentExplorer>
  );
};
