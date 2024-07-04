import { useDispatch } from "react-redux";
import LogInForm from "../../components/LogInForm/LogInForm"
import { login } from "../../redux/auth/operations";


const LogInPage = () => {
      const dispatch = useDispatch();
  const userLogin = (userData) => {
    dispatch(login(userData));
  };
  return (
    <div><LogInForm submit={userLogin}/></div>
  )
}

export default LogInPage