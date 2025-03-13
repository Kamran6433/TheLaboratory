// utils/firebase.js provides both the server and the client access to the firebaseApp, db, auth, and storage objects.
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1oN9L5NnPHyr1aPis3MSSU5qUF1v_PHE",
  authDomain: "stellar-52b7c.firebaseapp.com",
  projectId: "stellar-52b7c",
  storageBucket: "stellar-52b7c.appspot.com",
  messagingSenderId: "74904817792",
  appId: "1:74904817792:web:246f508826afd97a60d665",
  measurementId: "G-PWTPFEHJ5M",
};

let firebaseApp, db, auth, storage;

if (!getApps().length) {
  // Initialize Firebase
  firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
  auth = getAuth(firebaseApp);
  storage = getStorage(firebaseApp);
} else {
  firebaseApp = getApps()[0]; // Use the already initialized Firebase app
  db = getFirestore(firebaseApp);
  auth = getAuth(firebaseApp);
  storage = getStorage(firebaseApp);
}

// Export the Firebase utilities
export { firebaseApp, db, auth, storage };
