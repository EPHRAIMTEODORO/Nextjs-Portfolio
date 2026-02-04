'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Ephraim Teodoro';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            {displayedName}
            <span className="inline-block w-1 h-12 sm:h-16 lg:h-20 bg-gray-900 dark:bg-white ml-1 animate-pulse"></span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            I build software products that solve real problems and create measurable impact. 
            I focus on integrating technology into everyday workflows to streamline operations, automate repetitive tasks, and improve decision making. 
            My approach is product driven and user centered, 
            combining thoughtful design with solid engineering to turn ideas into tools that deliver long term value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              View Projects
            </a>
            <button
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
