type Project = {
  tag: string;
  title: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      tag: "Data & Analytics",
      title: "Tourism Data Visualization Dashboard",
      problem: "A large tourism dataset was being reviewed manually — someone would open a spreadsheet, scroll for hours, and still miss outliers. There was no way to see the shape of the data.",
      solution: "I built a dashboard with interactive scatter and bubble charts using d3.js. Users can filter by variables and immediately see clusters, outliers, and patterns that were invisible in rows and columns.",
      outcome: "Analysis that took hours became a few seconds of clicking. The people making decisions could finally work from the data instead of around it.",
      stack: ["d3.js", "JavaScript", "HTML/CSS"],
    },
    {
      tag: "Monitoring & Ops",
      title: "Enterprise Health Monitoring Dashboard (EIS)",
      problem: "Multiple services, no central view. When something broke, the team had to check each system individually — by which point the damage was already spreading.",
      solution: "I built a real-time dashboard that aggregates health data across all APIs and servers into one screen, with live status indicators and a full activity log.",
      outcome: "Incidents that used to go undetected for 20+ minutes got caught in seconds. The team stopped firefighting and started actually monitoring.",
      stack: ["React", "Node.js", "REST APIs", "PostgreSQL"],
    },
    {
      tag: "Automation",
      title: "Workflow Automation System",
      problem: "Student organizations were handling request approvals over email. Submissions got buried, follow-ups were forgotten, and nobody knew where anything stood in the process.",
      solution: "I built a full request management system — form submission, backend approval pipeline, database tracking, and automatic email notifications triggered at each stage.",
      outcome: "Admins stopped living in their inboxes. Applicants knew exactly where their request stood. The whole thing ran itself.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Email API"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Things I&apos;ve built
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            These are real projects that solved real problems. Each one has a story behind it.
          </p>
        </div>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-md hover:border-emerald-200 transition-all duration-200"
            >
              <div className="flex flex-wrap items-start gap-4 mb-5">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {project.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Problem</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Solution</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{project.outcome}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
