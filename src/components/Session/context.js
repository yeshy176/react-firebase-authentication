import { createContext, useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../Firebase/context";

const AuthUserContext = createContext(null);

function AuthUserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const unlisten = firebase.doOnAuthStateChanged((authUser) => {
      authUser ? setCurrentUser(authUser) : setCurrentUser(null);
    });
    
    return () => unlisten();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthUserContext.Provider value={{ currentUser }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export { AuthUserContext, AuthUserProvider };
