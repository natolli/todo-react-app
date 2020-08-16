import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBAaSnjvFH6BAIJeMr_7khI1FROlA35eio",
  authDomain: "todo-db-b045d.firebaseapp.com",
  databaseURL: "https://todo-db-b045d.firebaseio.com",
  projectId: "todo-db-b045d",
  storageBucket: "todo-db-b045d.appspot.com",
  messagingSenderId: "705386791212",
  appId: "1:705386791212:web:4ab48c2ed64be358d9ec89",
  measurementId: "G-CTTT1V254H",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
