import React from 'react';
import './Flag.css';

const Flag = () => {
  return (
    <div className="flag">
      <div className="white-part"></div>
      <div className="green-part"></div>
      <div className="crescent-moon">
        <div className="moon"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default Flag;