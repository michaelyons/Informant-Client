import React from 'react';

import PropTypes from 'prop-types';

import './ModalCard.css';

const ModalCard = ({ filingId, clientName, topic, register, date }) => {
  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Filing ID {filingId}</p>
          <p className="card-header-icon is-italic">Filed {date}</p>
        </header>
        <div className="media">
          <div className="card-content">
            <div className="media-content">
              <p className="subtitle">Registered by {register}</p>
              <p className="title is-size-6">For Client {clientName}</p>
              <p className="subtitle">{topic}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ModalCard.propTypes = {
  filingId: PropTypes.number,
  topic: PropTypes.string,
  clientName: PropTypes.string,
  register: PropTypes.string,
  date: PropTypes.string
};

export default ModalCard;
