import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { useContext } from "react";
import { AuthUserContext } from "./Session";

export default function RequireAuth({ children }) {
  const {state} = useContext(AuthUserContext);
  return state.currentUser ? <Navigate to={ROUTES.HOME} /> : children ;
}