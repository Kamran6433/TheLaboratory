// server/api/users/message.js
import { addDoc, collection } from 'firebase/firestore';
import { db } from '~/utils/firebase';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, email, phone, message, queryTypes, userId } = body;

  try {
    // Prepare message data for Firestore
    const messageData = {
      name,
      email,
      phone,
      message,
      queryTypes,
      createdAt: new Date().toISOString()
    };

    // Add userId to messageData if it's provided (user is logged in)
    if (userId) {
      messageData.userId = userId;
    }

    // Store message data in Firestore
    try {
      const docRef = await addDoc(collection(db, 'message'), messageData);
      
      return { 
        success: true, 
        message: 'Message sent successfully',
        messageId: docRef.id
      };
    }
    catch (error) {
      console.error('Firestore error:', error);
      return { 
        success: false, 
        message: error.message || 'An error occurred while saving the message'
      };
    }
  } catch (error) {
    console.error('Message sending error:', error);
    return { 
      success: false, 
      message: error.message || 'An error occurred while processing the message'
    };
  }
});