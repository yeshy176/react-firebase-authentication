import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "../SignOut";
import { useContext } from "react";
import { AuthUserContext } from "../Session";

export default function Navigation() {
  const {state} = useContext(AuthUserContext);

  return (<div>
    {state.currentUser ? <NavigationAuth /> : <NavigationNonAuth />}
  </div>
  );
}

function NavigationAuth() {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </li>
        <li>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </li>
        <li>
          <SignOutButton />
        </li>
      </ul>
    </div>
  );
}

function NavigationNonAuth() {
  return (
    <ul>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
    </ul>
  )
}