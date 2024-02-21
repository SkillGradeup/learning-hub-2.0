import React from "react";
import AppHeader from "./component/header/AppHeader";
import UserPage from "./component/user/UserPage";
import { Layout } from "antd";
function App() {
  return (
    <Layout>
      <AppHeader />
      <UserPage />
    </Layout>
  );
}

export default App;
