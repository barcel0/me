import React from 'react';

const Contact = () => {
  return (
    <div className="border-l border-gray-700 mt-40 pl-10" id="contact">
      <div className="flex items-center font-semibold text-gray-100">
        <span className="text-xl mr-2 text-gray-600">05. </span>
        <h1 className="text-3xl ">Get in touch</h1>
      </div>
      <div className="w-full mt-6 flex flex-col items-center">
        <p>Do not hesitate to contact if you require further information or if there is anything you would like to ask. My email inbox is always open!</p>
        <a href="mailto:lbarcelocarrera@gmail.com" className="link text-xl border border-gray-100 rounded-sm font-semibold py-2 px-6 mt-8">Say Hello</a>
      </div>
    </div>
  );
}

export default Contact;