import React from 'react';
import { Link } from 'react-router-dom';

import './LaunchButton.css';

const LaunchButton = () => {
  return (
    <Link to="/launch">
      <button className="launch-button">Launch a Container</button>
    </Link>
  );
}

export default LaunchButton;
