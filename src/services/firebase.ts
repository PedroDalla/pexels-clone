import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref as strRef,
  StorageError,
  uploadBytesResumable,
} from "firebase/storage";
import {
  DataSnapshot,
  get,
  getDatabase,
  limitToFirst,
  onValue,
  orderByKey,
  push,
  query,
  ref,
  set,
  startAt,
} from "firebase/database";
import {
  IUser,
  IStageFile,
  IUploadFile,
  IGalleryResult,
  IPhoto,
  IUserCollectionResult,
  ICollection,
} from "../interfaces";
import { v4 as uuid } from "uuid";

const firebaseConfiguration = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfiguration);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };

const storageRef = strRef(storage);

export async function fetchUser(userUID: string) {
  const reference = ref(db, `users/${userUID}`);
  try {
    const result = await get(reference);
    const parsed = result.val();
    if (parsed) {
      return parsed;
    } else {
      throw new Error("No user was found!");
    }
  } catch (err: unknown) {
    console.error(err);
    throw new Error("Error!");
  }
}

export function listenForUser(
  userUID: string,
  onUpdate: (val: DataSnapshot) => void
) {
  const reference = ref(db, `users/${userUID}`);

  return onValue(reference, (val) => onUpdate(val));
}

export async function fetchUserCollections(userUID: string) {
  const reference = ref(db, `users/${userUID}/collections`);
  try {
    const result = await get(reference);
    const parsed: IUserCollectionResult = result.val();
    if (parsed) {
      return parsed;
    } else {
      throw new Error("No user collections were found!");
    }
  } catch (err: unknown) {
    console.error(err);
    throw new Error("Error when fetching user");
  }
}

export async function addImageToCollection(
  collectionUID: string,
  imageUID: string
) {
  const reference = ref(db, `collections/${collectionUID}`);

  try {
    const collection = await get(reference);
    const parsedCollection: ICollection = collection.val();
    //Verifies if the collection exists
    if (parsedCollection) {
      //Checking for the same image already in the collection to avoid duplicates
      if (
        !parsedCollection.content ||
        (parsedCollection.content &&
          !Object.values(parsedCollection.content).find(
            (val) => val.uid === imageUID
          ))
      ) {
        try {
          const contentRef = ref(db, `collections/${collectionUID}/content`);
          const newUID = push(contentRef).key;
          if (newUID) {
            await set(reference, {
              ...parsedCollection,
              ...{
                contentCount: parsedCollection.contentCount + 1,
                content: {
                  ...parsedCollection.content,
                  ...{ [newUID]: { uid: imageUID } },
                },
              },
            });
          }
        } catch (err) {
          console.error(err);
          throw new Error("Error writing collection data!");
        }
      }
    } else {
      throw new Error("The collection provided does not exist!");
    }
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching collection data!");
  }
}

export async function fetchCollection(collectionUID: string) {
  const reference = ref(db, `collections/${collectionUID}`);
  try {
    const result = await get(reference);
    const parsed = result.val();
    if (parsed) {
      return parsed;
    } else {
      throw new Error("No collection was found!");
    }
  } catch (err: unknown) {
    console.error(err);
    throw new Error("Error!");
  }
}

export async function createNewCollection(userUID: string, title: string) {
  const reference = push(ref(db, `collections`));
  const uid = reference.key;
  if (uid) {
    const newCollection: ICollection = {
      authorUID: userUID,
      content: {},
      contentCount: 0,
      title: title,
      uid: uid,
    };
    try {
      await set(reference, newCollection);

      try {
        const userReference = ref(db, `users/${userUID}/collections`);
        const userCollection = { uid: uid };
        await push(userReference, userCollection);
      } catch (err) {
        console.error(err);
        throw new Error("Error assigning collection to user in the database!");
      }
    } catch (err: unknown) {
      console.error(err);
      throw new Error("Error writing new collection to the database!");
    }
  } else {
    throw new Error("Error writing new collection to the database!");
  }
}

export async function fetchImagesPaginated(
  pageSize: number,
  startAtKey?: string | null
): Promise<IPhoto[]> {
  // Query the data
  const reference = ref(db, "gallery");
  let imagesQuery;
  if (startAtKey) {
    imagesQuery = query(
      reference,
      orderByKey(),
      limitToFirst(pageSize),
      startAt(startAtKey)
    );
  } else {
    imagesQuery = query(reference, orderByKey(), limitToFirst(pageSize));
  }

  // Fetch the data
  try {
    const snapshot = await get(imagesQuery);
    const data: IGalleryResult = snapshot.val();

    // Convert the snapshot data to an array
    if (data) {
      const dataArray: IPhoto[] = Object.keys(data).map((key) => ({
        key,
        ...data[key],
      }));
      return dataArray;
    } else {
      throw new Error("Empty data array!");
    }
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching images");
  }
}

export async function fetchUserGallery(userUID: string) {
  const reference = ref(db, `users/${userUID}/gallery`);
  try {
    const result = await get(reference);
    const parsed = result.val();
    if (parsed) {
      return parsed;
    } else {
      throw new Error("No user was found!");
    }
  } catch (err: unknown) {
    console.error(err);
    throw new Error("Error when fetching users");
  }
}

export function listenForImage(
  img_uid: string,
  onUpdate: (val: IPhoto) => void
) {
  const reference = ref(db, `gallery/${img_uid}`);

  return onValue(reference, (snapshot: DataSnapshot) => {
    const value: IPhoto = snapshot.val();
    onUpdate(value);
  });
}

export async function setImageLike(
  img_uid: string,
  userUID: string,
  like: boolean
) {
  const imageReference = ref(db, `gallery/${img_uid}/likes`);
  const userLikeReference = ref(db, `users/${userUID}/likes/${img_uid}`);
  try {
    const img = await get(imageReference);
    const parsedImg = img.val();
    if (typeof parsedImg === "number") {
      set(userLikeReference, like);
      let modifier = 1;
      if (!like) modifier = -1;
      set(imageReference, parsedImg + modifier);
    } else {
      throw new Error("No image was found!");
    }
  } catch (err) {
    console.error(err);
    throw new Error("Error fetching user");
  }
}

//Function that uploads an image to the database
export function uploadImage(
  file: IStageFile,
  user: IUser,
  onError?: (error: StorageError) => void,
  onCompletion?: () => void,
  onProgress?: (progress: number) => void
) {
  const uid = uuid();
  const imageRef = strRef(storageRef, `images/${uid}`);
  const fileMetadata = {
    likes: 0,
    photographerUID: user.uid,
    uid: uid,
  };
  const newImage: IUploadFile = {
    ...file.optionalDetails,
    ...file.technical,
    ...fileMetadata,
  };

  //Uploads the image into the cloud storage
  const uploadTask = uploadBytesResumable(imageRef, file.data);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      if (onProgress) onProgress(progress);
    },
    (error) => {
      if (onError) {
        onError(error);
      } else {
        console.error(error);
      }
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((uploadURL) => {
        const galleryRef = ref(db, `gallery/${uid}`);
        const imageURL = uploadURL.replace(
          "https://firebasestorage.googleapis.com/",
          ""
        );
        const serverURL = "https://ik.imagekit.io/yhnfbha9i/";
        const imageURLs = {
          original: serverURL + imageURL,
          small: serverURL + "tr:w-800/" + imageURL,
          medium: serverURL + "tr:w-1200/" + imageURL,
          blur: serverURL + "tr:bl-7/" + imageURL,
        };
        set(galleryRef, { ...newImage, ...imageURLs })
          .then(() => {
            //Adds the image into the user's account
            const userRef = ref(db, `users/${user.uid}/gallery`);
            push(userRef, { uid: uid })
              .then(() => {
                if (onCompletion) {
                  onCompletion();
                }
              })
              .catch((error) => {
                if (onError) onError(error);
              });
          })
          .catch((error) => {
            if (onError) onError(error);
          });
      });
    }
  );
}
