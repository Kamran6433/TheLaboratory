// plugins/firebase.js
// Import the functions you need from the SDKs you need from utils/firebase
import { firebaseApp, db, auth, storage } from '../utils/firebase';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export default defineNuxtPlugin((nuxtApp) => {
  // Provide Firebase services to Nuxt app
  nuxtApp.provide('firebaseApp', firebaseApp);
  nuxtApp.provide('fireStore', db);
  nuxtApp.provide('firebaseAuth', auth);
  nuxtApp.provide('firebaseStorage', storage);
});
