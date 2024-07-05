import ContactList from "./components/ContactList/ContactList";
import HomePage from "./pages/HomePage/HomePage";
import { Suspense, useEffect } from "react";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AppBar from "./components/AppBar/AppBar";
import LogInPage from "./pages/LogInPage/LogInPage";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

function App() {
  const dispatch = useDispatch();
   const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

 
  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <div id="box">
      <AppBar />

      <Suspense fallback={null}>
        <Routes className={css.wrapper}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ContactList />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
