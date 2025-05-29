import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-16">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">About JobHunt</h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          JobHunt is a modern job portal dedicated to connecting talented professionals with their dream jobs.
          Our platform ensures verified job listings, easy application processes, and career guidance resources to help you grow.
        </p>
        <p className="text-gray-600 mb-4">
          Founded in 2025, we have helped thousands of job seekers and employers find the perfect match.
        </p>
        <p className="text-gray-600">
          Whether you're looking to hire or be hired, JobHunt is your trusted partner every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
