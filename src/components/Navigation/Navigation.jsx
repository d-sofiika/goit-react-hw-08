import { NavLink} from "react-router-dom";
import css from "./navigation.module.css"

const Navigation = () => {
  return (
    <div className={css.boxNavigation}>
      
      <nav className={css.navigation}>
       
      <NavLink to="/" className={css.buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={css.buildLinkClass}>
          Contacts
        </NavLink>
        
      </nav></div>
  )
}

export default Navigation