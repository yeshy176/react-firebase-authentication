import { Link } from "react-router-dom"
import * as ROUTES from "../../constants/routes"

export default function PasswordForgotLink() {
  return (
    <p>
      <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
  )
}