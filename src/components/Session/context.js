import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const AuthUserContext = createContext(null);

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null
}

function AuthUserProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);

  return (
    <AuthUserContext.Provider value={{state, dispatch }}>
      {children}
    </AuthUserContext.Provider>
  );
}

export { AuthUserContext, AuthUserProvider };
