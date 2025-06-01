import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
        <p className="text-gray-700 text-lg mb-4">
          Hello! My name is <strong>Asad Qayyum</strong>. I'm a passionate developer who created this project to showcase my skills and explore modern web technologies.
        </p>
        <p className="text-gray-700 text-lg mb-4">
          I’m always excited to work on new ideas and collaborate on innovative projects. You can find my portfolio, GitHub, and LinkedIn below:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg mb-4">
          <li>
            <a href="https://asadqayyum.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Portfolio
            </a>
          </li>
          <li>
            <a href="https://github.com/iAsadDev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/asad-qayyum-2646ba251" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              LinkedIn
            </a>
          </li>
        </ul>
        <p className="text-gray-700 text-lg">
          Feel free to connect with me for collaborations, freelance work, or just to say hi!
        </p>
      </div>
    </div>
  );
};

export default About;
