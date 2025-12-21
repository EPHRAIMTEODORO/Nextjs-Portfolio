import type { SkillCategory } from "@/types";

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL", "HTML/CSS"],
    },
    {
      category: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "Express", "Vue.js", "Django"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Kubernetes", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 dark:text-gray-400 flex items-center"
                  >
                    <span className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
