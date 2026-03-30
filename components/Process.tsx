const steps = [
  {
    number: "01",
    title: "Understand",
    description: "You tell me what you're trying to do. I ask the right questions. We get on the same page before a single line of code gets written.",
  },
  {
    number: "02",
    title: "Build",
    description: "I work end-to-end — UI, logic, data, infrastructure. You get updates along the way, not a surprise at the end.",
  },
  {
    number: "03",
    title: "Ship",
    description: "We go live. Properly — with real hosting, environment config, and anything else you need to actually run it.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Real users find things you didn't expect. I stick around to fix, adjust, and make it better based on what you learn.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How I work</h2>
          <p className="text-lg text-gray-500 max-w-2xl">
            No surprises, no black boxes. Here&apos;s what working together looks like.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line — hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-6 h-0.5 bg-emerald-200 z-10" />
              )}
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-200 transition-colors duration-200 h-full">
                <span className="text-3xl font-bold text-emerald-400">{step.number}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
