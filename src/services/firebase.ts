import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage, ref as strRef } from 'firebase/storage'
import { get, getDatabase, ref } from 'firebase/database'

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

export async function fetchUser(uid: string) {
  let reference = ref(db, `users/${uid}`)
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

const storageRef = strRef(storage)
const imagesRef = strRef(storageRef, 'images')

export async function uploadImage() {

}