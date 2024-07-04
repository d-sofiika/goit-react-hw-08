import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import { selectLoggedIn } from "../../redux/auth/selectors"
import UserInfo from "../UserInfo/UserInfo"



const AppBar = () => {

  const isLoggedIn = useSelector(selectLoggedIn)
  return (
    <div><Navigation />
      
    {isLoggedIn ? <UserInfo/> : <AuthNav />}
    </div>
  )
}

export default AppBar