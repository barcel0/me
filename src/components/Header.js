import React, { useState } from 'react';
import IconFingerprint from './icons/IconFingerprint';

const Header = () => {
  const [showNavContent, setShowNavContent] = useState('hidden');

  const handleToggleClick = () => {
    if (showNavContent === 'hidden') {
      setShowNavContent('');
    } else {
      setShowNavContent('hidden')
    }
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 px-4 py-3 fixed w-full z-10 top-0 shadow-md" style={{ height: 60 }}>
      <div className="flex items-center flex-shrink-0 text-white ml-2">
        <a href="https://barcel0.github.io/me" className="flex no-underline hover:no-underline tracking-wider text-xl font-semibold" >
          <span className="mr-2"><IconFingerprint size={6} /></span>
          <h1>luis barceló</h1>
        </a>
      </div>
      <div className="block lg:hidden">
        <button id="nav-toggle" onClick={handleToggleClick} className="flex items-center px-3 py-2 border border-gray-400 hover:text-white hover:border-white">
          m
          </button>
      </div>
      <div className={`w-full flex-grow lg:items-center lg:w-auto lg:block pt-4 lg:pt-0  ${showNavContent}`} id="nav-content">
        <ul className="list-reset lg:flex justify-end flex-1 font-semibold items-center lg:border-none">
          <li className="header-element">
            <a href='#about' className="link inline-block py-0 px-4">01. About</a>
          </li>
          <li className="header-element">
            <a href='#stack' className="link inline-block py-0 px-4">02. Technologies</a>
          </li>
          <li className="header-element">
            <a href='#portfolio' className="link inline-block py-0 px-4">03. Portfolio</a>
          </li>
          <li className="header-element">
            <a href='#education' className="link inline-block py-0 px-4">04. Education</a>
          </li>
          <li className="header-element">
            <a href='#contact' className="link inline-block py-0 px-4">05. Contact</a>
          </li>
          <li className="header-element tracking-wide font-bold border-2 border-yellow-500 rounded-md ">
            <a href='./pdf/cv-2021-lbarcelo.pdf' download className="link inline-block py-0 px-4">CV</a>
          </li>
        </ul>
      </div>
    </nav >
  );
}

export default (Header);