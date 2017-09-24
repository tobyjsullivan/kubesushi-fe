import React from 'react';
import GithubConnectButton from './GithubConnectButton';

import Logo from '../components/Logo';

const SplashPage = () => {
  return (
    <div>
      <div className="App-header">
        <div className="App-logo">
          <Logo />
        </div>
        <h2>Welcome to Kubesushi</h2>
        <GithubConnectButton />
      </div>
      <p className="App-intro">
      </p>
    </div>
  );
}

export default SplashPage;
