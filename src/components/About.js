import React from 'react';
import profile from '../images/profile.png'

const About = () => {
  return (
    <div className="border-l border-gray-700 mt-40 pl-10" id="about">
      <div className="flex items-center font-semibold text-gray-100">
        <span className="text-xl mr-2 text-gray-600">01. </span>
        <h1 className="text-3xl ">About Me</h1>
      </div>
      <div className="w-full mt-6 flex justify-between">

        <div className="w-3/5 leading-tight mr-10">
          <p>
            Hi there, my name is <span className="text-orange-400 font-bold">Luis Barceló</span> and I'm a self-taught junior <span className="text-orange-400 font-bold">javascript developer</span>.
          </p>
          <p>
            I enjoy creating new applications as well as learning new technologies and methodologies that can help you producing <span className="text-orange-400 font-bold">neat code</span>. I have been focused on learning <span className="text-orange-400 font-bold">ReactJS</span> as well as <span className="text-orange-400 font-bold">React Native</span> lately, while trying to build at the same time a solid javascript foundation.
            </p>
          <p>
            Always have had a genuine interest in <span className="text-orange-400 font-bold">software development</span> from a young age, even during the last years, while working as an architect. I also have interest in economics, especially in the futures market, where I day trade.
          </p>
        </div>

        <div className="w-2/5 flex justify-center">
          <img className="h-56 rounded-md grayscale" src={profile} alt={"Profile"} />
        </div>

      </div>

    </div>
  );
}

export default About;