import React from 'react';

const Education = () => {
  return (
    <div className="border-l border-gray-700 mt-40 pl-10" id="education">
      <div className="flex items-center font-semibold text-gray-100">
        <span className="text-xl mr-2 text-gray-600">04. </span>
        <h1 className="text-3xl ">Education</h1>
      </div>
      <div className="flex-col w-full mt-6 flex justify-between">
        <p className="my-2">As self-taught developer, many different sources have influenced my learning path, being these the more noteworthy:</p>

        <h2 className="mt-4">Courses</h2>
        <div className="flex w-full mr-10">
          <ul className="technologies-list text-orange-400 font-bold">
            <li className="link"><a href='https://www.udemy.com/course/the-web-developer-bootcamp/learn/'>Udemy: The Web Developer Bootcamp</a></li>
            <li className="link"><a href='https://www.udemy.com/course/the-advanced-web-developer-bootcamp/'>Udemy: The Advanced Web Developer Bootcamp</a></li>
            <li className="link"><a href='https://www.udemy.com/course/react-redux/'>Udemy: Modern React with Redux</a></li>
            <li className="link"><a href='https://www.udemy.com/course/the-complete-react-native-and-redux-course/'>Udemy: The Complete React Native + Hooks Course</a></li>
            <li className="link"><a href='https://www.udemy.com/course/react-native-the-practical-guide/'>Udemy: React Native - The Practical Guide [2020 Edition]</a></li>
            <li className="link"><a href='https://www.udemy.com/course/nodejs-master-class/'>Udemy: Node.js: The Complete Guide to Build RESTful APIs</a></li>
            <li className="link"><a href='https://www.freecodecamp.org/'>freeCodeCamp</a></li>
            <li className="link"><a href='https://javascript.info/'>javascript.info</a></li>
          </ul>
        </div>

        <h2 className="mt-4">Books</h2>
        <div className="flex w-full mr-10">
          <ul className="technologies-list text-orange-400 font-bold">
            <li>You Don't Know JS, Kyle Simpson</li>
            <li>Eloquent JavaScript, Marijn Haverbeke</li>
            <li>Learning React, Kirupa Chinnathambi</li>
            <li>HTML5 for Web Designers, Jeremy Keith and Rachel Andrew</li>
            <li>CSS3 for Web Designers, Dan Cederholm</li>
          </ul>
        </div>

        <h2 className="mt-4">YouTube Channels</h2>
        <div className="flex w-full mr-10">
          <ul className="technologies-list text-orange-400 font-bold">
            <li className="link"><a href='https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA'>Traversy Media</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ'>freeCodeCamp.org</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q'>Fun Fun Function</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q'>Dev Ed</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w'>Academind</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw'>LearnCode.academy</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCJbPGzawDH1njbqV-D5HqKw'>thenewboston</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg'>The Net Ninja</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ'>DevTips</a></li>
            <li className="link"><a href='https://www.youtube.com/channel/UCmmjSAoQsF5rcLh7DyuOnnQ'>Congar Programming</a></li>
          </ul>
        </div>



      </div>

    </div>
  );
}


export default Education;