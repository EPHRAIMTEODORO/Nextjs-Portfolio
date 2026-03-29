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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm bg-blue-50 text-primary-dark rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="flex-1 text-center px-4 py-2 border-2 border-gray-300 text-gray-900 rounded-md hover:bg-gray-50 hover:border-primary-main transition-all duration-200 font-medium"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="flex-1 text-center px-4 py-2 bg-primary-main text-white rounded-md hover:bg-primary-dark transition-colors duration-200 font-medium shadow-md"
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
