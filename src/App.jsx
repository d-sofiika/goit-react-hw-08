

import ContactList from "./components/ContactList/ContactList";

import HomePage from "./pages/HomePage/HomePage";

//import { useDispatch, useSelector } from "react-redux";
//import { selectError, selectIsLoading } from "./redux/contacts/slice";
import { Suspense } from "react";

import css from "./App.module.css";

import { Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AppBar from "./components/AppBar/AppBar";
import LogInPage from "./pages/LogInPage/LogInPage";


function App() {

  //const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

   /*{isLoading && <p>Loading tasks...</p>}
          {error && <p>{error}</p>}*/
  return (
    <div id="box">
     
      <AppBar />
     
   
      <Suspense fallback={null}>
        <Routes className={css.wrapper}>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogInPage/>} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<ContactList />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
