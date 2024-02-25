import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "./component/login/LoginForm";
import AppHeader from "./component/header/AppHeader";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/admin" />
            ) : (
              <LoginForm onLogin={handleLogin} />
            )
          }
        />
        <Route path="/admin" element={<AppHeader />} />
      </Routes>
    </Router>
  );
};

export default App;
