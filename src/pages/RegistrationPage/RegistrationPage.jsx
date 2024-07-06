import { useDispatch } from "react-redux";

import { registration } from "../../redux/auth/operations";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const userRegistration = (userData) => {
    dispatch(registration(userData));
  };
  return (
    <div>
      <RegistrationForm submit={userRegistration} />
    </div>
  );
};

export default RegistrationPage;
