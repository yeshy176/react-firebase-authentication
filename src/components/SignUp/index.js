import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useState } from "react";

export default function SignUpPage() {
  return (
    <div>
      <h1>SignUp</h1>
      <SignUpForm />
    </div>
  );
}

const SignUpForm = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  });

  const handleFormSubmit = () => {};

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
      <button type="submit" disabled={isInvalid}>Sign Up</button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  );
};

const SignUpLink = () => {
  return (
    <p>
      Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
    </p>
  );
};
