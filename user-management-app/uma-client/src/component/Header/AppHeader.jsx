import React from 'react';
import { PageHeader } from 'antd';
const AppHeader = () => {
  return (
    <PageHeader
      className="w-full"
      title="Adya"
      subTitle="Born to explore the world"
      avatar={{ src: 'images/hanuman.jpg', size:'large' }}
    />
  );
};

export default AppHeader;
