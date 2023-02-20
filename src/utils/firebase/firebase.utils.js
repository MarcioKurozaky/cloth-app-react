import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import {
getFirestore,
doc,
getDoc,
setDoc
}from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlS-B6637CCIMb7JPQ4UQoVEl3eQPvG-Q",
  authDomain: "cloth-db-baef4.firebaseapp.com",
  projectId: "cloth-db-baef4",
  storageBucket: "cloth-db-baef4.appspot.com",
  messagingSenderId: "890996923317",
  appId: "1:890996923317:web:01983ee71aeb871e3f57fc",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)  =>{
  const userDocRef = doc(db,"users",userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  //if user Exist
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef,{
        displayName,
        email,
        createdAt
      } );
    } catch (error) {
      console.log("error cerating the user", error.message);
    }

  }
  //

  return userDocRef;
}
