// to access the PDF files
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { useNuxtApp } from '#app';

export function useFirebaseStorage() {
  const { $firebaseStorage } = useNuxtApp();

  const listPapers = async (path) => {
    const listRef = ref($firebaseStorage, path);
    try {
      const res = await listAll(listRef);
      return res.items.map(item => item.name);
    } catch (error) {
      console.error("Error listing papers:", error);
      return [];
    }
  };

  const getPDFUrl = async (path) => {
    const fileRef = ref($firebaseStorage, path);
    try {
      const url = await getDownloadURL(fileRef);
      console.log("Successfully retrieved URL:", url);
      return url;
    } catch (error) {
      console.error("Error getting download URL:", error.code, error.message);
      throw error;
    }
  };

  return {
    listPapers,
    getPDFUrl
  };
}