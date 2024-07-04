import { useDispatch } from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { register } from "../../redux/auth/operations";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const userRegister = (userData) => {
    dispatch(register(userData));
  };
  return (
    <div>
      <RegisterForm submit={userRegister} />
    </div>
  );
};

export default RegisterPage;
