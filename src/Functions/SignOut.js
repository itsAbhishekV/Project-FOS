import { auth } from "../Firebase/firebase.util"
import { Navigate } from "react-router-dom"

const UserSignOut = () => {
    auth.signOut()
}


export default UserSignOut