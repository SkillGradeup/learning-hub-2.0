import React from "react";
import { PageHeader, Avatar } from "antd";
const AppHeader = () => {
  return (
    <PageHeader
      className="sticky top-0 z-50 bg-white shadow-lg"
      title="Adya"
      subTitle="Born to explore the world"
      extra={[<Avatar key="avatar" src="images/hanuman.jpg" size="large" />]}
    />
  );
};

export default AppHeader;
