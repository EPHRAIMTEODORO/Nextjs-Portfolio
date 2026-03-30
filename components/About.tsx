export default function WhyMe() {
  const reasons = [
    {
      title: "I build the whole thing",
      body: "Frontend, backend, database, deployment — I own all of it. You won't end up with a pretty UI that breaks the moment it hits a real server.",
    },
    {
      title: "One person, full accountability",
      body: "No team of contractors. No miscommunication between a designer and a dev. You talk to me, and I build it. Faster decisions, cleaner output.",
    },
    {
      title: "I ship things, not plans",
      body: "I'm not here to prototype indefinitely. My goal is to get something working in your hands as fast as possible, then improve from there.",
    },
    {
      title: "I've solved these problems before",
      body: "Dashboards, automations, monitoring tools — these aren't new territory for me. I know what breaks in production and how to build around it.",
    },
  ];

  return (
    <section id="why-me" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why work with me?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            There are a lot of developers out there. Here&apos;s the honest version of why I&apos;m different.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-emerald-200 transition-colors duration-200"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{reason.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
