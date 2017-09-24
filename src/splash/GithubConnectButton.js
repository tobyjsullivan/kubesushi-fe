import React from 'react';
import { Link } from 'react-router-dom';

import './GithubConnectButton.css';

const GithubConnectButton = () => {
  return (
    <Link to="/dashboard">
      <button className="signin-button">Connect with Github</button>
    </Link>
  );
}

export default GithubConnectButton;
