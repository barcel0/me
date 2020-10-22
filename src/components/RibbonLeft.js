import React from 'react';
import IconHome from './icons/IconHome';
import IconGitHub from './icons/IconGitHub';
import IconEmail from './icons/IconEmail';

const RibbonLeft = () => {
  return (
    <div className="w-1/12 flex flex-col items-center fixed z-10" style={{ left: 5, bottom: 40 }}>
      <ul className="flex flex-col items-center">
        <li className="link mt-8"><a href="https://barcel0.github.io/me"><IconHome size={6} /></a></li>
        <li className="link mt-8"><a href="https://github.com/barcel0"><IconGitHub size={6} /></a></li>
        <li className="link mt-8"><a href="mailto:lbarcelocarrera@gmail.com"><IconEmail size={6} /></a></li>
      </ul>
    </div>
  );
}

export default RibbonLeft;