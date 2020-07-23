import React from 'react';
import SpinnerGif from '../Images/spinner.gif';

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={SpinnerGif} alt="spinner" />;
    </div>
  );
};

export default Spinner;
