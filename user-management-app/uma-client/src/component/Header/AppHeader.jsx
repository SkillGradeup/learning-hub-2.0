/*AppHeader.jsx*/
import React from "react";
import { PageHeader, Avatar, Typography, Space } from "antd";
import Portfolio from "../portfolio/Portfolio";
import { Link } from "react-router-dom";
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
            <Link to="/portfolio">
              <Avatar src="images/hanuman.jpg" size="large">
                <Portfolio />
              </Avatar>
            </Link>
          </Space>
        </>,
      ]}
    />
  );
};

export default AppHeader;
