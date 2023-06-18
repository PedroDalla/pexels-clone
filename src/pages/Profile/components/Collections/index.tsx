import { useEffect, useState } from "react";
import { IUser } from "../../../../interfaces";
// import { addImageToCollection } from "../../../../services/firebase";
import { CollectionThumbnail } from "./CollectionThumbnail";
import { StyledCollections } from "./styles";

export const Collections: React.FC<{
  user: IUser | undefined;
}> = ({ user }) => {
  const [collectionUIDS, setCollectionUIDS] = useState<string[]>([]);

  useEffect(() => {
    if (user?.collections) {
      const uids: string[] = [];
      Object.values(user.collections).forEach((collection) =>
        uids.push(collection.uid)
      );
      setCollectionUIDS(uids);
    }
  }, [user]);

  return (
    <StyledCollections>
      {/* <button
        onClick={() =>
          addImageToCollection(
            "-NY632ahB7zHoFnECS9H",
            "c716fb78-66bc-4ad7-a3b8-bdbb77d6153d"
          )
        }>
        click me
      </button> */}
      {collectionUIDS.map((collectionUID, index) => (
        <CollectionThumbnail key={index} collectionUID={collectionUID} />
      ))}
    </StyledCollections>
  );
};
