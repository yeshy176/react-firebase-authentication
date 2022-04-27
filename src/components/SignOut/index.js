import { useContext } from "react"
import { FirebaseContext } from "../Firebase/context"
import { useNavigate } from "react-router-dom"
import * as ROUTES from "../../constants/routes"

export default function SignOutButton() {
  const navigate = useNavigate()
  const {firebase} = useContext(FirebaseContext)
  const handleSignOut = () => {
    firebase.doSignOut()
    localStorage.removeItem("user")
    navigate(ROUTES.LANDING)
  }

  return (
    <button type="button" onClick={handleSignOut}>
      Sign Out
    </button>
  )
}