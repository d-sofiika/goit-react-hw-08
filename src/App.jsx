
import { lazy, Suspense, useEffect } from "react";
import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";

import PublicRoute from "./components/PublicRoute/PublicRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Layout from "./components/Layout/Layout";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LogInPage = lazy(() => import("./pages/LogInPage/LogInPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));

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
    
  <Layout>
      <Suspense fallback={null}>
        <Routes className={css.wrapper}>
            <Route path="/" element={<HomePage />} />
               <Route element={<PublicRoute/>}>
            <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          </Route>
          
          <Route element={<RestrictedRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Routes>
          </Suspense>
          </Layout>
    </div>
  );
}

export default App;
