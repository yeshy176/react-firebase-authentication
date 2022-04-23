import { createContext } from "react";
import Firebase from "./firebase";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const firebase = new Firebase();

  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export {FirebaseContext, FirebaseProvider};