import React from 'react';
import { Linkedin, Github, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">👋 About Me</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
          I'm <strong>Asad Qayyum</strong> — a passionate developer who built this project to showcase my skills,
          creativity, and love for clean UI. I'm constantly learning and love turning ideas into reality using code.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <a
            href="https://asadqayyum.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl shadow-sm transition"
          >
            <Globe className="text-blue-600" />
            <span className="text-blue-800 font-medium">Portfolio</span>
          </a>

          <a
            href="https://github.com/iAsadDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 bg-gray-100 hover:bg-gray-200 rounded-xl shadow-sm transition"
          >
            <Github className="text-gray-700" />
            <span className="text-gray-800 font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/asad-qayyum-2646ba251"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-4 bg-blue-100 hover:bg-blue-200 rounded-xl shadow-sm transition"
          >
            <Linkedin className="text-blue-700" />
            <span className="text-blue-900 font-medium">LinkedIn</span>
          </a>
        </div>

        <p className="text-gray-600 text-md">
          💬 Always open to collaboration, freelance projects, or just a chat about tech!
        </p>
      </div>
    </div>
  );
};

export default About;
