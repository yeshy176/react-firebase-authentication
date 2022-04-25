import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "../Navigation/index"
import LandingPage from '../Landing';
import SignUpPage from '../SignUp/index';
import SignInPage from '../SignIn';
import PasswordForgotPage from '../PasswordForgot';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';

export default function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <hr />
      <Routes>
        <Route path={ROUTES.LANDING} element={<LandingPage />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgotPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ACCOUNT} element={<AccountPage />} />
        <Route path={ROUTES.ADMIN} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}