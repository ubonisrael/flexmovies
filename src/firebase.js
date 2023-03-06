// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from "./config/firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const createApp = (config = {}) => {

  if (getApps().length === 0) {
    return initializeApp(config)
  } else {
    return getApp()
  }
}

const app = createApp(firebaseConfig)

export const auth = getAuth(app);
export const db = getFirestore(app);
