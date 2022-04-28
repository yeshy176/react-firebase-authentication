import { useContext } from "react"
import { FirebaseContext } from "../Firebase/context"
import { useNavigate } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import { AuthUserContext } from "../Session"

export default function SignOutButton() {
  const {dispatch} = useContext(AuthUserContext);
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleSignOut = () => {
    firebase.doSignOut()
    dispatch({type: "logout"})
    navigate(ROUTES.LANDING)
  }

  return (
    <button type="button" onClick={handleSignOut}>
      Sign Out
    </button>
  )
}