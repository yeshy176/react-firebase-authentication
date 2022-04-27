import { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase/context";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

export default function SignUpForm() {
  const initialState = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };
  const [state, setState] = useState({...initialState});
  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    if (firebase) {
      firebase
        .doCreateUserWithEmailAndPassword(state.email, state.passwordOne)
        .then((authUser) => {
          setState({...initialState});
          navigate(ROUTES.HOME);
        })
        .catch((error) => {
          setState({ ...state, error: error.message });
        });
    }
  };

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const isInvalid =
    state.passwordOne !== state.passwordTwo ||
    state.passwordOne === "" ||
    state.email === "" ||
    state.username === "";

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handleInputChange}
        placeholder="Full Name"
        autoComplete="username"
      />
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleInputChange}
        placeholder="Email"
        autoComplete="email"
      />
      <input
        type="password"
        name="passwordOne"
        value={state.passwordOne}
        onChange={handleInputChange}
        placeholder="Password"
        autoComplete="new-password"
      />
      <input
        type="password"
        name="passwordTwo"
        value={state.passwordTwo}
        onChange={handleInputChange}
        placeholder="Confirm Password"
        autoComplete="new-password"
      />
      <button type="submit" disabled={isInvalid}>
        Sign Up
      </button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  );
}
