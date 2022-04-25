import SignUpLink from '../SignUp/SignUpLink';
import * as ROUTES from '../../constants/routes';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../Firebase/context';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  return (
    <div>
      <h1>SignIn</h1>
      <SignInForm />
      <SignUpLink />
    </div>
  )
}

function SignInForm() {
  const initialState = {
    email: '',
    password: '',
    error: null
  }
  const [state, setState] = useState(initialState);

  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate();

  function handleInputChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    firebase.doSignInWithEmailAndPassword(state.email, state.password)
    .then(() => {
      setState({initialState})
      navigate(ROUTES.HOME);
    })
    .catch(error => {
      setState({
        ...state,
        error
      })
    })
  }

  const isInvalid = state.password === '' || state.email === '';

  return (
    <form onSubmit={handleFormSubmit}>
        <input type="email" name='email' value={state.email} onChange={handleInputChange} placeholder='Email Address' />
        <input type="password" name='password' onChange={handleInputChange} value={state.password} placeholder='Password' />
      <button disabled={isInvalid} type="submit">Sign In</button>
      {state.error && <p>{state.error.message}</p>}
    </form>
  )
}