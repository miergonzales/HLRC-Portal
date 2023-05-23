import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/*________________________________________________________________________________*/

const firebaseConfig = {
  apiKey: "AIzaSyAFxrgxxr6-LnHYm5lfoU6fm_GJ591IWh0",
  authDomain: "hampaslupas-riders-club-portal.firebaseapp.com",
  projectId: "hampaslupas-riders-club-portal",
  storageBucket: "hampaslupas-riders-club-portal.appspot.com",
  messagingSenderId: "737178406017",
  appId: "1:737178406017:web:0b90e1f6ba6cbb07581180",
  measurementId: "G-WX4NCLJNCV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const provider = new GoogleAuthProvider();

/*________________________________________________________________________________*/
