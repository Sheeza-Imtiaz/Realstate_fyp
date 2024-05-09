import React from 'react';

const TopUpButton = ({ onClick }) => {
  return (
    <button className="btn btn-primary top-up-button" onClick={onClick}>
      Top Up
    </button>
  );
};

export default TopUpButton;
