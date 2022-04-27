import { Navigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
// import { useContext } from "react";
// import { AuthUserContext } from "./Session";

export default function RequireAuth({ children }) {
  const currentUser = localStorage.getItem('user')
  return currentUser ? <Navigate to={ROUTES.HOME} /> : children ;
}