import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { selectAuth } from "../../redux/auth/selectors"

const PublicRoute = () => {
    const { isLoggedIn, token } = useSelector(selectAuth)
    if (!isLoggedIn && token) {
        return <p>Loading...</p>
    }

    if (isLoggedIn && token) {
        return <Navigate to="/contacts"/>
    }
  return <Outlet/>
}

export default PublicRoute