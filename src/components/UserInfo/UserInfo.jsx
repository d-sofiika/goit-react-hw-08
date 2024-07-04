import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors"
import { logOut } from "../../redux/auth/operations"


const UserInfo = () => {
  const nameUser = useSelector(selectUser)
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (<div>
    <p>Welcome, {nameUser.name}!</p>
      <button onClick={handleLogOut}>LogOut</button>
      </div>
  )
}

export default UserInfo