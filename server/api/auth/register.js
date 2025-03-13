// server/api/auth/register.js
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '~/utils/firebase';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password, name, number, school } = body;

  try {
    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Prepare user data for Firestore
    const userData = {
      email,
      password,
      name,
      number,
      school,
      subscriptionStatus: 'inactive', // Default value
      createdAt: new Date().toISOString(),
      emailVerified: false
    };

    // Store user data in Firestore
    try {
      await setDoc(doc(db, 'users', user.uid), userData);
    }
    catch (error) {
      console.error('Firestore error:', error);
      return { 
        success: false, 
        message: error.message || 'An error occurred during setDoc()'
      };
    }

    const idToken = await user.getIdToken();

    return { 
      success: true, 
      message: 'User registered successfully',
      user: {
        uid: user.uid,
        email: user.email,
        ...userData
      },
      idToken: idToken
    };
  } catch (error) {
    console.error('Registration error:', error);
    return { 
      success: false, 
      message: error.message || 'An error occurred during registration'
    };
  }
});