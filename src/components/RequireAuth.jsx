import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useContext } from "react";
import { AuthUserContext } from "./Session";

export default function RequireAuth({ children }) {
  const {currentUser} = useContext(AuthUserContext);

  return currentUser ? children : <Navigate to={ROUTES.SIGN_IN} />;
}