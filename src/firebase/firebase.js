import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmaR01zdj8u7zVWcb0yW8bB6vBcdTzRVM",
  authDomain: "mobile-react-app.firebaseapp.com",
  projectId: "mobile-react-app",
  storageBucket: "mobile-react-app.appspot.com",
  messagingSenderId: "495075656916",
  appId: "1:495075656916:web:71fdd9d885906ea44f2741"
});
export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
