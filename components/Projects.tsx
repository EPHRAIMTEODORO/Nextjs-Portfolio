import type { Project } from "@/types";

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "[Project Name 1]",
      description:
        "[Project description - A comprehensive e-commerce platform with real-time inventory management, payment processing, and order tracking.]",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "[Project Name 2]",
      description:
        "[Project description - Real-time data dashboard for monitoring application metrics with customizable widgets and alert system.]",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "[Project Name 3]",
      description:
        "[Project description - Social media platform with user authentication, post creation, comments, and real-time notifications.]",
      techStack: ["Vue.js", "Express", "Redis", "AWS S3", "Docker"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 4,
      title: "[Project Name 4]",
      description:
        "[Project description - Task management application with drag-and-drop functionality, team collaboration, and progress tracking.]",
      techStack: ["React", "Python", "FastAPI", "PostgreSQL", "Material-UI"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-primary-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="flex-1 text-center px-4 py-2 bg-gray-900 dark:bg-primary-400 text-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
