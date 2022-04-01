import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/users/usersSlice";
import { auth, onAuthStateChanged } from "./firebase";

import MainLayout from "./components/layout/MainLayout";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        setLoading(false);
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName
          })
        );
      } else {
        setLoading(false);
        dispatch(logout());
      }
    });
  }, []);

  if (loading) { return <div></div>; }
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainLayout />}>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {user && <div>{user.displayName}</div>}
    </div>
  );
}

export default App;
