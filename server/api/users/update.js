// /server/api/users/update.js
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';

export default defineEventHandler(async (event) => {
  const body = await readBody(event); // Get data from request body
  const { uid, isSubscribed } = body; // Extract uid and subscription status

  try {
    // Reference to the user's document in Firestore
    const userRef = doc(db, 'users', uid);

    // Update the user's subscription status
    await updateDoc(userRef, {
      isSubscribed: isSubscribed
    });

    return { success: true, message: 'You Are Now Subscribed to Studybyte!' };
  } catch (error) {
    return { success: false, message: error.message };
  }
});
