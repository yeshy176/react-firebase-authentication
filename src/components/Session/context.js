import { createContext, useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../Firebase/context";

const AuthUserContext = createContext(null);

function AuthUserProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.doOnAuthStateChanged(authUser => {
      authUser
         ? setAuthUser(authUser)
         : setAuthUser(null)
    });
 
     return () => listener();
   })

  return (
  <AuthUserContext.Provider value={{authUser}}>{children}</AuthUserContext.Provider>
  );
}

export { AuthUserContext, AuthUserProvider };