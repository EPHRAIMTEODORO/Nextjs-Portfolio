export default function About() {
  const focusAreas = [
    "Web Application Development",
    "API Design & Integration",
    "Database Architecture",
    "Cloud Infrastructure",
    "Performance Optimization",
    "UI/UX Implementation",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            [Bio paragraph - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            With several years of experience in software development, I specialize in creating 
            robust and scalable web applications. My journey in tech has led me through various 
            projects ranging from e-commerce platforms to real-time data visualization tools.]
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            [Another bio paragraph - I believe in writing clean, maintainable code and staying 
            current with industry best practices. When I'm not coding, you can find me contributing 
            to open-source projects or learning about emerging technologies.]
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Areas of Focus
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {focusAreas.map((area, index) => (
                <li
                  key={index}
                  className="flex items-start"
                >
                  <svg
                    className="h-6 w-6 text-gray-900 dark:text-white mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-400">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
