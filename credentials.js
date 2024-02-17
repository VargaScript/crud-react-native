// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPflprGwWezqbNol0vzJnLi4pcxUq8bUc",
  authDomain: "crud-react-native-974fc.firebaseapp.com",
  projectId: "crud-react-native-974fc",
  storageBucket: "crud-react-native-974fc.appspot.com",
  messagingSenderId: "755540400926",
  appId: "1:755540400926:web:c5797c3f17328d9f79470f",
  measurementId: "G-6CDVD3EN45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default appFirebase;