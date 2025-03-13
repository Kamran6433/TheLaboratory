function parseFirebaseError(error) {
  const errorCode = error.code;
  const errorMessage = error.message;
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Invalid credentials. Please check your email and password.";
    case "auth/user-not-found":
      return "No account found with this email address.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/weak-password":
      return "Password is too weak. It should be at least 6 characters long.";
    case "auth/invalid-email":
      return "Invalid email address. Please enter a valid email.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    default:
      return errorMessage || "An unexpected error occurred. Please try again.";
  }
}

export { parseFirebaseError as p };
//# sourceMappingURL=firebaseErrorParser--QNGMjHC.mjs.map
