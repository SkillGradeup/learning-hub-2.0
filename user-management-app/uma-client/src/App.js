import React from "react";
import AppHeader from "./component/header/AppHeader";
import UserPage from "./component/user/UserPage";
function App() {
  return (
    <div className="container mx-auto">
      <div className="app-header">
        <AppHeader />
      </div>
      <div className="app-content">
        <UserPage />
      </div>
      <div className="app-footer">App footer</div>
    </div>
  );
}

export default App;
