import { auth } from "../Firebase/firebase.util"
const UserSignOut = () => {
    auth.signOut()
}


export default UserSignOut