import React from 'react';
import profile from '../images/profile.png'

const About = () => {
  return (
    <div className="border-l border-gray-700 mt-40 pl-10" id="about">
      <div className="section-title">
        <span className="text-xl mr-2 text-gray-600">01. </span>
        <h1 className="text-3xl ">About Me</h1>
      </div>
      <div className="w-full mt-6 flex justify-between">
        <div className="w-3/5 leading-tight mr-10">
          <p>
            Hi there, my name is <span className="highlight">Luis Barceló</span> and I'm a <span className="highlight">Junior JavaScript Developer</span>.
          </p>
          <p>I enjoy creating new applications as well as learning new technologies and methodologies that can help you producing neat code. During my learning, I have been mostly focused on <span className="highlight">ReactJS</span> with <span className="highlight">Redux</span> in the frond end and <span className="highlight">Express</span> with <span className="highlight">Mongoose</span> in the back end, although I have also had exposure to other exciting technologies like <span className="highlight">React Native</span> or <span className="highlight">GraphQL</span>.</p>
          <p>
            Always have had a genuine interest in software development from a young age, even during the last years, while working as an Architect. I also have interest in finance, especially in the futures market, where I like to trade every now and then.
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