export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            [Your Full Name]
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6">
            [Your Title / Role - e.g., Full Stack Developer]
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            [Short intro paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Passionate about building scalable web applications and creating seamless user experiences. 
            Focused on clean code and modern development practices.]
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
            >
              View Projects
            </a>
            <button
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
