import firebase from "firebase/app";
//* cách này tránh những gói không cần thiết
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYa0xkGLY88c2DODjOZtjdicxzaPIV0z0",
  authDomain: "marketproject-bbbff.firebaseapp.com",
  databaseURL: "https://marketproject-bbbff.firebaseio.com",
  projectId: "marketproject-bbbff",
  storageBucket: "marketproject-bbbff.appspot.com",
  messagingSenderId: "977781680543",
  appId: "1:977781680543:web:89b10332435d613a9535aa",
  measurementId: "G-7XHDYB6K68",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

//* để xử dụng auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//* truy cập auth.GoogleAuthProvider class từ libraries này
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
