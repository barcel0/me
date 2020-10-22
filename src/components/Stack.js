import React from 'react';

const Stack = () => {
  return (
    <div className="border-l border-gray-700 mt-40 pl-10" id="stack">
      <div className="flex items-center font-semibold text-gray-100">
        <span className="text-xl mr-2 text-gray-600">02. </span>
        <h1 className="text-3xl ">Stack</h1>
      </div>
      <div className="flex-col w-full mt-6 flex justify-between">
        <p>
          Technologies I have been focusing on, in order of preference:
          </p>

        <div className="flex w-full mr-10">
          <ul className="technologies-list text-orange-400 font-bold">
            <li>React Native</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Express</li>
            <li>Node.js</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>Javascript</li>
            <li>TailwindCSS</li>
            <li>SASS</li>
            <li>Bootstrap</li>
          </ul>
        </div>


      </div>

    </div>
  );
}


export default Stack;