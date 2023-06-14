import styled from "styled-components";
import { ICollection } from "../../interfaces";
import { FaRegImages } from "react-icons/fa";

const StyledCollectionThumbnail = styled.div`
  .collection-thumbnail {
    min-width: 100px;
    min-height: 75px;

    &.1 {
    }

    &.2 {
      display: grid;
    }

    &.3 {
    }
  }

  .collection-info {
    .collection-title {
    }

    .collection-count {
    }
  }
`;

interface CollectionThumbnailProps {
  collection: ICollection;
}

export const CollectionThumbnail: React.FC<CollectionThumbnailProps> = ({
  collection,
}) => {
  return (
    <StyledCollectionThumbnail>
      <div className={"collection-thumbnail " + collection.count}></div>
      <div className="collection-info">
        <span className="collection-title">{collection.title}</span>
        <div className="collection-count">
          <FaRegImages></FaRegImages>
          <span>{collection.count}</span>
        </div>
      </div>
    </StyledCollectionThumbnail>
  );
};
