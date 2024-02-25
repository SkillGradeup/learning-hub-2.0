/*App.js*/
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./component/app/Home"
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        {/* Route for login form */}
        <Route element={<Login />} path="/"></Route>
      </Routes>
    </Router>
  );
};

export default App;
