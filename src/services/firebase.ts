import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getDownloadURL, getStorage, ref as strRef, StorageError, uploadBytes, uploadBytesResumable } from 'firebase/storage'
import { get, getDatabase, onValue, push, ref, set } from 'firebase/database'
import { IUser, IPhoto, IStageFile, IUploadFile } from '../interfaces';
import { v4 as uuid } from 'uuid'

var firebaseConfiguration = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSENGER_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


let app = initializeApp(firebaseConfiguration);
const auth = getAuth(app)
const db = getDatabase(app)
const storage = getStorage(app)

export { auth, db, storage }


const storageRef = strRef(storage)

export async function fetchUser(user_uid: string) {
  let reference = ref(db, `users/${user_uid}`)
  try {
    const result = await get(reference)
    const parsed = result.val()
    if (parsed) {
      return parsed
    } else {
      throw new Error("No user was found!")
    }
  } catch (err: any) {
    throw new Error(err)
  }
}


export async function fetchUserGallery(user_uid: string) {
  let reference = ref(db, `users/${user_uid}/gallery`)
  try {
    const result = await get(reference)
    const parsed = result.val()
    if (parsed) {
      return parsed
    } else {
      throw new Error("No user was found!")
    }
  } catch (err: any) {
    throw new Error(err)
  }
}

export function listenForImage(img_uid: string, onUpdate: (val: any) => void) {
  let reference = ref(db, `gallery/${img_uid}`)

  return onValue(reference, (val) => onUpdate(val))
}

export function getImageURL(img_uid: string) {
  let reference = strRef(storageRef, `images/${img_uid}`)
  return getDownloadURL(reference)
}


//Function that uploads an image to the database
export function uploadImage(file: IStageFile, user: IUser, onError?: (error: StorageError) => void, onCompletion?: () => void, onProgress?: (progress: number) => void) {
  const uid = uuid()
  const imageRef = strRef(storageRef, `images/${uid}`)
  const fileMetadata = {
    likes: 0,
    photographer_uid: user.uid,
    uid: uid
  }
  const newImage: IUploadFile = { ...file.optionalDetails, ...file.technical, ...fileMetadata }

  //Uploads the image into the cloud storage
  const uploadTask = uploadBytesResumable(imageRef, file.data)

  uploadTask.on('state_changed', (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    if (onProgress) onProgress(progress)
  }, (error) => {
    if (onError) {
      onError(error)
    } else {
      console.error(error)
    }
  }, () => {
    const galleryRef = ref(db, `gallery/${uid}`)
    set(galleryRef, newImage).then(() => {

      //Adds the image into the user's account
      const userRef = ref(db, `users/${user.uid}/gallery`)
      push(userRef, { uid: uid }).then(() => {
        if (onCompletion) {
          onCompletion()
        }
      }).catch(error => { if (onError) onError(error) })
    }).catch(error => { if (onError) onError(error) })
  })
}