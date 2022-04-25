import { useContext } from "react"
import { FirebaseContext } from "../Firebase/context"

export default function SignOutButton() {
  const {firebase} = useContext(FirebaseContext)

  return (
    <button type="button" onClick={firebase.doSignOut}>
      Sign Out
    </button>
  )
}