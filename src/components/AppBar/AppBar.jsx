import { useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import { selectLoggedIn } from "../../redux/auth/selectors"
import UserInfo from "../UserInfo/UserInfo"
import css from "./appBar.module.css"


const AppBar = () => {

  const isLoggedIn = useSelector(selectLoggedIn)
  return (
    <div className={css.boxNavigation}><Navigation />
      
    {isLoggedIn ? <UserInfo/> : <AuthNav />}
    </div>
  )
}

export default AppBar