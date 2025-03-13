// /server/api/users/[uid].js
import { doc, getDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';

export default defineEventHandler(async (event) => {
  const { uid } = event.context.params; // Extract the UID from the request URL

  try {
    // Reference to the user's document in Firestore
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return { success: true, data: userSnap.data() };
    } else {
      return { success: false, message: 'User not found' };
    }
  } catch (error) {
    return { success: false, message: error.message };
  }
});
