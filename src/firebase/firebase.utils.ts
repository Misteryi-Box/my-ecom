
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  // apiKey: "AIzaSyDhF5LpVojfr6xReWG90reynwGnUfi_hBA",
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "my-ecom-4a4c2.firebaseapp.com",
  databaseURL: "https://my-ecom-4a4c2.firebaseio.com",
  projectId: "my-ecom-4a4c2",
  storageBucket: "my-ecom-4a4c2.appspot.com",
  messagingSenderId: "528353775616",
  appId: "1:528353775616:web:4e9f86bb255236df7b48e5",
  measurementId: "G-QTGX486KX4"
}

export const createUserProfileDocument = async(userAuth: any, additionalData?: any) => {
  if(!userAuth) return;

  // const userRef = firestore.doc('users/blah123')
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  console.log('snapShot',snapShot);

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (err) {
      console.log('error creating user', err.message)
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
