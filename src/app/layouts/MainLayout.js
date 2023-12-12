// layouts/MainLayout.js
'use client';
import React from 'react';

import SideBar from '../components/drawer';

const MainLayout = ({ children, active }) => {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar active={active} />
      <div style={{ flexGrow: 1, marginTop: 60 }}>{children}</div>
    </div>
  );
};

export default MainLayout;
