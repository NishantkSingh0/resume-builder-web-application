import React, { useEffect } from "react";
import Typed from "typed.js"; 
import { useNavigate } from 'react-router-dom';

const features= [
  "Build your resume easily",
  "Different variants of resume templates available",
  "Download your resume in pdf or web formate",
  "Stand out to employers",
  "Completely free to use",
  "Use AI to create a perfect description for your resume"
]

const FrontPage = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate('/GetInfo');
  };
  const handleExamples = () => {
    navigate('/Examples');
  };

  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: features,
      loop: true,
      typeSpeed: 35,
      backSpeed: 25,
      backDelay: 500,
      cursorChar: " "
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center px-4">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Resume Builder Web Application
        </h1>
        <span className="text-xl sm:text-2xl text-gray-800 h-6 mb-3 typing-text"></span>
        <div className="flex space-x-6">
          <button className="hidden md:block px-4 py-[5px] bg-blue-500 text-white rounded-full hover:bg-blue-700 mt-5" onClick={handleExamples}>
            Examples
          </button>
          <button className="px-4 py-[5px] bg-blue-500 text-white rounded-full hover:bg-blue-700 mt-5" onClick={handleContinue}>
            Continue
          </button>
        </div>

      </div>
      <div className="absolute bottom-2 text-center">
        <p className="text-sm sm:text-lg text-gray-500">BRAVERS</p>
        <p className="text-xs sm:text-sm text-gray-500 mb-5">
          <a href="https://nishantksingh0.github.io/Portfolio/" target="_blank">
            nishantksingh0.github.io/Portfolio
          </a>
        </p>
      </div>
    </div>
  );
};

export default FrontPage;
