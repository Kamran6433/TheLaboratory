import { getApps, initializeApp } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from '@firebase/auth';
import { getStorage } from '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC1oN9L5NnPHyr1aPis3MSSU5qUF1v_PHE",
  authDomain: "stellar-52b7c.firebaseapp.com",
  projectId: "stellar-52b7c",
  storageBucket: "stellar-52b7c.appspot.com",
  messagingSenderId: "74904817792",
  appId: "1:74904817792:web:246f508826afd97a60d665",
  measurementId: "G-PWTPFEHJ5M"
};
let firebaseApp, db, auth;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
  db = getFirestore(firebaseApp);
  auth = getAuth(firebaseApp);
  getStorage(firebaseApp);
} else {
  firebaseApp = getApps()[0];
  db = getFirestore(firebaseApp);
  auth = getAuth(firebaseApp);
  getStorage(firebaseApp);
}

export { auth as a, db as d };
//# sourceMappingURL=firebase.mjs.map
