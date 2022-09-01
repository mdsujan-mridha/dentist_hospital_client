// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVRJ5QafbVUhQ0V4nZLLjWkzvvSH6M1x4",
  authDomain: "hospital-e19b2.firebaseapp.com",
  projectId: "hospital-e19b2",
  storageBucket: "hospital-e19b2.appspot.com",
  messagingSenderId: "716580385360",
  appId: "1:716580385360:web:cad344841409317efb1755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;