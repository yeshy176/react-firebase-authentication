import { useState, useContext } from "react"
import { FirebaseContext } from "../Firebase/context"

export default function PasswordForgotForm() {
  const initialState = {
    email: "",
    error: null,
  }
  const [state, setState] = useState({...initialState})
  const {firebase} = useContext(FirebaseContext)

  function handlePasswordReset(e) {
    e.preventDefault()
    firebase.doPasswordReset(state.email)
    .then(() => {
      setState({...initialState})
    })
    .catch(error => {
      setState({ ...state, error: error })
    })
  }

  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const isInvalid = state.email === '';

  return (
    <form onSubmit={handlePasswordReset}>
      <input name='email' value={state.email} onChange={handleInputChange} type="email" placeholder="Email Address" />
      <button disabled={isInvalid} type="submit">Send Reset Link</button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  )
}