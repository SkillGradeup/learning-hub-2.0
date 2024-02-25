import React from "react";

import { PageHeader, Avatar, Typography, Space } from "antd";
import "./AppHeader.css";
const { Text } = Typography;
const AppHeader = () => {
  return (
    <PageHeader
      className="app-header mx-2 sticky top-0 z-50 bg-white shadow-lg"
      title="Adya"
      subTitle="Born to explore the world"
      extra={[
        <>
          <Text className="user-name" strong>
            <Space className="fl-name" direction="vertical">
              <Text key="firstName">Jai</Text>
              <Text key="lastName">Hanuman</Text>
            </Space>
          </Text>
          <Space>
            <Avatar src="images/hanuman.jpg" size="large" />
          </Space>
        </>,
      ]}
    />
  );
};

export default AppHeader;
