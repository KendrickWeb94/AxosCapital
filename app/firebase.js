

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4mBamqBDpQIZI9WRichDj75mE91taTmI",
  authDomain: "upload-files-36c85.firebaseapp.com",
  projectId: "upload-files-36c85",
  storageBucket: "upload-files-36c85.appspot.com",
  messagingSenderId: "182879210053",
  appId: "1:182879210053:web:8b4f06c132c383700b312c"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
