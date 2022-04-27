import { useState, useContext } from "react";
import { FirebaseContext } from "../Firebase/context";

export default function PasswordChangeForm() {
  const initialState = {
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };
  const [state, setState] = useState({ ...initialState });
  const { firebase } = useContext(FirebaseContext);

  function handlePasswordChange(e) {
    e.prevendDefault();
    firebase
      .doPasswordUpdate(state.passwordOne)
      .then(() => {
        setState({ ...initialState });
      })
      .catch((error) => {
        setState({ ...state, error });
      });
  }

  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const isInvalid =
    state.passwordOne !== state.passwordTwo || state.passwordOne === "";

  return (
    <form onSubmit={handlePasswordChange}>
      <input hidden type='text' name='email' autoComplete='email' />
      <input
        name="passwordOne"
        value={state.passwordOne}
        onChange={handleInputChange}
        type="password"
        placeholder="New Password"
        autoComplete="new-password"
      />
      <input
        name="passwordTwo"
        value={state.passwordTwo}
        onChange={handleInputChange}
        type="password"
        placeholder="New Password"
        autoComplete="new-password"
      />
      <button disabled={isInvalid}>Change Password</button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  );
}
