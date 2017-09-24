import React from 'react';

import TitleBar from '../components/TitleBar';
import LaunchButton from './LaunchButton';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <TitleBar />
      <div className="dashboard__content-area">
        <LaunchButton />
      </div>
    </div>
  );
}

export default Dashboard;
