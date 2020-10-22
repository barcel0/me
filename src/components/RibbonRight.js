import React from 'react';

const RibbonRight = () => {
  return (
    <div className="link w-1/12 flex flex-col items-center fixed z-10" style={{ right: 5, bottom: 120 }}>
      <div className="flex transform -rotate-90">
        <a href="mailto:lbarcelocarrera@gmail.com" className="">lbarcelocarrera@gmail.com</a>
      </div>
    </div>
  );
}

export default RibbonRight;


