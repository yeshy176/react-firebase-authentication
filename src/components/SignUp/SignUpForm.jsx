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
  const [state, setState] = useState(initialState);
  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    firebase
      .doCreateUserWithEmailAndPassword(state.email, state.passwordOne)
      .then((authUser) => {
        setState(initialState);
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        setState({ ...state, error });
      });
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
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handleInputChange}
        placeholder="Full Name"
      />
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="passwordOne"
        value={state.passwordOne}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <input
        type="password"
        name="passwordTwo"
        value={state.passwordTwo}
        onChange={handleInputChange}
        placeholder="Confirm Password"
      />
      <button type="submit" disabled={isInvalid}>
        Sign Up
      </button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  );
}

