import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-48 mb-12">
      <span>Built by Luis Barceló</span>
      <div className="flex text-sm mt-6 italic">
        <span className="mr-4">Some credits: </span>
        <ul className="flex">
          <li className="mr-4">Icons - www.entypo.com</li>
          <li className="mr-4">Human Faces - www.thispersondoesnotexist.com</li>
          <li>Portfolio Inspiration - www.brittanychiang.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;