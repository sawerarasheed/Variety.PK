
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAtjzA-PbMDBSwK2wEduQLL8tu-8lbeUH4",
  authDomain: "front-end-storage.firebaseapp.com",
  projectId: "front-end-storage",
  storageBucket: "front-end-storage.appspot.com",
  messagingSenderId: "707317028328",
  appId: "1:707317028328:web:27dec3b258087ffa51c05d"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)