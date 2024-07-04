import "./App.css";

import ContactList from "./components/ContactList/ContactList";

import HomePage from "./pages/HomePage/homePage";
import { GiRotaryPhone } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "./redux/contactSlice";
import { Suspense, useEffect } from "react";
import { fetchContact } from "./redux/contacts/operations";
import css from "./App.module.css";
import Navigation from "./componen/Navigation/navigation";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <div id="box">
      <p>
        <GiRotaryPhone size="124" />
      </p>
      <h1>Phonebook</h1>
      <Navigation />
      <Suspense fallback={null}>
        <Routes className={css.wrapper}>
          {isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<HomePage />}>
            <Route path="/login" element={<HomePage />} />
            <Route path="/register" element={<HomePage />} />
          </Route>
          <Route path="/contacts" element={<ContactsPage />} />
         
          <Route path="*" element={<ContactList />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
