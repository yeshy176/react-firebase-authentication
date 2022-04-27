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
import RequireAuth from "../RequireAuth";
import DisplayHome from "../DisplayHome";
import NotFound from "../NotFound";


export default function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <hr />
      <Routes>
        <Route path={ROUTES.LANDING} element={<DisplayHome><LandingPage /></DisplayHome>} />
        <Route path={ROUTES.SIGN_UP} element={<DisplayHome><SignUpPage /></DisplayHome>} />
        <Route path={ROUTES.SIGN_IN} element={<DisplayHome><SignInPage /></DisplayHome>} />
        <Route path={ROUTES.PASSWORD_FORGET} element={<PasswordForgotPage />} />
        <Route path={ROUTES.HOME} element={<RequireAuth><HomePage /></RequireAuth>} />
        <Route path={ROUTES.ACCOUNT} element={<RequireAuth><AccountPage /></RequireAuth>} />
        <Route path={ROUTES.ADMIN} element={<RequireAuth><AdminPage /></RequireAuth>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}