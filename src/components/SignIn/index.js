import SignUpLink from "../SignUp/SignUpLink";
import * as ROUTES from "../../constants/routes";
import { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase/context";
import { useNavigate } from "react-router-dom";
import PasswordForgotLink from "../PasswordForgot/PasswordForgotLink";

export default function SignInPage() {
  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm />
      <PasswordForgotLink />
      <SignUpLink />
    </div>
  );
}

function SignInForm() {
  const initialState = {
    email: "",
    password: "",
    error: null,
  };
  const [state, setState] = useState({...initialState});

  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  function handleSignIn(event) {
    event.preventDefault();
    if (firebase) {
      firebase
        .doSignInWithEmailAndPassword(state.email, state.password)
        .then((authUser) => {
          setState({ initialState });
          localStorage.setItem("user", JSON.stringify(authUser));
          navigate(ROUTES.HOME);
        })
        .catch((error) => {
          setState({
            ...state,
            error: error,
          });
        });
    }
  }

  const isInvalid = state.password === "" || state.email === "";

  return (
    <form onSubmit={handleSignIn}>
      <input
        type="email"
        name="email"
        value={state.email}
        onChange={handleInputChange}
        placeholder="Email Address"
        autoComplete="username"
      />
      <input
        type="password"
        name="password"
        onChange={handleInputChange}
        value={state.password}
        placeholder="Password"
        autoComplete="current-password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  );
}
