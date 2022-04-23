import { createContext } from "react";
import Firebase from "./firebase";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const firebaseInstance = new Firebase();

  return (
    <FirebaseContext.Provider value={firebaseInstance}>
      {children}
    </FirebaseContext.Provider>
  );
};

export {FirebaseContext, FirebaseProvider};