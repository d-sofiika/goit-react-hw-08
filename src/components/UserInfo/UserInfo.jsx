import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./userInfo.module.css"
const UserInfo = () => {
  const nameUser = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  if (!nameUser || !nameUser.name) {
    return <p>Loading...</p>;
  }
  console.log("nameUser.name", nameUser.name);
  return (
    <div className={css.userInfo}>
      <p className={css.userName}>Welcome, {nameUser.name}!</p>
      <button className={css.userBtn} onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default UserInfo;
