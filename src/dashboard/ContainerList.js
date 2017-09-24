import React from 'react';

import './ContainerList.css';

const ContainerList = () => {
  return (
    <ul className="container-list">
      <li className="container-list__summary container-summary">
        <div className="container-summary__cell container-summary__container-id">
          <p className="container-summary__content">45c104fb5468</p>
        </div>
        <div className="container-summary__cell container-summary__image">
          <p className="container-summary__content">tobyjsullivan/event-store:latest</p>
        </div>
        <div className="container-summary__cell container-summary__status">
          <p className="container-summary__content">Status: Online</p>
        </div>
        <div className="container-summary__cell container-summary__uptime">
          <p className="container-summary__content">Uptime: 13 Days</p>
        </div>
      </li>
      <li className="container-list__summary container-summary">
        <div className="container-summary__cell container-summary__container-id">
          <p className="container-summary__content">6b5cae127e86</p>
        </div>
        <div className="container-summary__cell container-summary__image">
          <p className="container-summary__content">tobyjsullivan/event-reader:latest and some longer content</p>
        </div>
        <div className="container-summary__cell container-summary__status">
          <p className="container-summary__content">Status: Online</p>
        </div>
        <div className="container-summary__cell container-summary__uptime">
          <p className="container-summary__content">Uptime: 12 Hours</p>
        </div>
      </li>
    </ul>
  );
}

export default ContainerList;
