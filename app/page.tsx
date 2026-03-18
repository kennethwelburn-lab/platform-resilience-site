export default function PlatformResilienceWebsite() {
  const pillars = [
    "Architecture Resilience",
    "Backup & Data Protection",
    "Disaster Recovery Capability",
    "Security & Threat Protection",
    "Operational Maturity",
    "Monitoring & Observability",
  ];

  const services = [
    {
      title: "Infrastructure Resilience Index (IRI) Assessment",
      price: "£3,000 – £5,000",
      desc: "A structured assessment providing a clear resilience score, risk visibility, and a prioritised improvement roadmap.",
    },
    {
      title: "Infrastructure Resilience Strategy Project",
      price: "£8,000 – £20,000",
      desc: "A deeper engagement to design and strengthen architecture, recovery capability, and operational resilience across critical systems.",
    },
    {
      title: "Fractional Infrastructure Advisor",
      price: "£1,000 – £3,000 / month",
      desc: "Ongoing senior advisory support for CTOs and technology leaders who need structured guidance without a full-time infrastructure leader.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F6F8] text-[#1F2933]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Platform Resilience"
              className="h-20 w-auto"
            />
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#services" className="transition-colors hover:text-[#2FA4A9]">Services</a>
            <a href="#iri" className="transition-colors hover:text-[#2FA4A9]">IRI</a>
            <a href="#about" className="transition-colors hover:text-[#2FA4A9]">About</a>
            <a href="#contact" className="transition-colors hover:text-[#2FA4A9]">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-[#0F2A44] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90"
          >
            Book a Resilience Review
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F4F6F8] to-slate-100">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2FA4A9]/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0F2A44]/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#0F2A44] md:text-6xl">
                Infrastructure Resilience Advisory for Business-Critical Platforms
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Identify risk. Improve resilience. Prevent outages. Platform Resilience helps organisations assess, measure, and strengthen the resilience of their infrastructure, platforms, and services.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#0F2A44] px-6 py-3 font-medium text-white shadow-lg shadow-slate-200 hover:opacity-90"
                >
                  Book a Resilience Review
                </a>
                <a
                  href="mailto:contact@platformresilience.io"
                  className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-medium text-[#0F2A44] hover:border-[#2FA4A9]"
                >
                  contact@platformresilience.io
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                {[
                  ["6", "resilience pillars"],
                  ["0–30", "IRI score"],
                  ["90 days", "improvement roadmap"],
                ].map(([num, label]) => (
                  <div key={label} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <div className="text-2xl font-bold text-[#0F2A44]">{num}</div>
                    <div className="mt-1 text-sm text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-200 ring-1 ring-slate-200">
              <div className="rounded-[1.5rem] bg-[#0F2A44] p-6 text-white">
                <div className="text-sm uppercase tracking-[0.2em] text-[#B8E6E8]">What we do</div>
                <div className="mt-2 text-2xl font-semibold">Specialist advisory for resilience, recovery, and platform risk</div>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  We help organisations understand where critical infrastructure is exposed, reduce operational risk, and improve the resilience of systems that matter most.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Infrastructure Resilience Assessments",
                  "Disaster Recovery Strategy",
                  "Platform Reliability Advisory",
                  "Risk Identification and Mitigation Planning",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-[#F4F6F8] p-4">
                    <div className="text-sm font-medium leading-6 text-[#0F2A44]">{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="iri" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A5A78]">Core assessment model</div>
              <h2 className="mt-3 text-3xl font-bold text-[#0F2A44] md:text-4xl">
                Infrastructure Resilience Index (IRI)
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                A structured, data-driven assessment of platform resilience across six key domains. The IRI provides a clear, measurable view of how resilient your infrastructure is today — and where improvement is required.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[2rem] bg-[#F4F6F8] p-4 shadow-lg ring-1 ring-slate-200 md:p-8">
              <img
                src="/iri-diagram.png"
                alt="Infrastructure Resilience Index Framework"
                className="w-full rounded-2xl"
              />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-[#0F2A44]">Six pillars of assessment</h3>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {pillars.map((pillar) => (
                    <div key={pillar} className="rounded-2xl border border-slate-200 bg-[#F4F6F8] px-4 py-4 text-sm font-medium text-[#0F2A44]">
                      {pillar}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#0F2A44]">Each assessment delivers</h3>
                <ul className="mt-5 space-y-3 text-slate-700">
                  <li>• A resilience score (0–30)</li>
                  <li>• Scoring across six domains (0–5 per pillar)</li>
                  <li>• Visual analysis of strengths and weaknesses</li>
                  <li>• Identified risks and vulnerabilities</li>
                  <li>• A clear, prioritised improvement roadmap</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20" id="services">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A5A78]">Services</div>
            <h2 className="mt-3 text-3xl font-bold text-[#0F2A44] md:text-4xl">
              Structured services for infrastructure risk reduction
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Clear advisory offers designed to help organisations understand risk, improve resilience, and access senior infrastructure guidance without hiring a full-time leader.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <div className="inline-flex rounded-full bg-[#2FA4A9]/10 px-3 py-1 text-sm font-medium text-[#0F2A44]">
                  {service.price}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#0F2A44]">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.desc}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-[#0F2A44] hover:border-[#2FA4A9]"
                >
                  Discuss this service
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white" id="about">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] bg-[#F4F6F8] p-8 shadow-sm ring-1 ring-slate-200">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3A5A78]">Why Platform Resilience</div>
              <h2 className="mt-3 text-3xl font-bold text-[#0F2A44] md:text-4xl">
                Senior judgement for complex infrastructure environments
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Platform Resilience is led by Kenny Welburn, providing specialist advisory support to CTOs, founders, and engineering leaders who need a structured view of infrastructure resilience, disaster recovery, and platform reliability.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The focus is practical: identify operational risk, prioritise improvements, and help leadership teams build platforms that remain reliable under pressure.
              </p>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-[#3A5A78] to-[#0F2A44] p-8 text-white shadow-xl">
              <div className="text-sm uppercase tracking-[0.2em] text-[#B8E6E8]">What you gain</div>
              <ul className="mt-6 space-y-4 text-slate-100">
                <li className="rounded-2xl bg-white/10 px-4 py-4">Clear visibility of infrastructure risk</li>
                <li className="rounded-2xl bg-white/10 px-4 py-4">Measurable resilience scoring</li>
                <li className="rounded-2xl bg-white/10 px-4 py-4">Identification of critical gaps</li>
                <li className="rounded-2xl bg-white/10 px-4 py-4">A prioritised 90-day improvement roadmap</li>
                <li className="rounded-2xl bg-white/10 px-4 py-4">Greater confidence in platform stability and recovery</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#0F2A44]" id="contact">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B8E6E8]">Contact</div>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Book a resilience review
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  If you want to understand the resilience of your platform and where your risks are, start with a short conversation. From there, we can determine whether an Infrastructure Resilience Index assessment is the right next step.
                </p>
                <div className="mt-8">
                  <a href="mailto:contact@platformresilience.io" className="text-lg font-medium text-white underline underline-offset-4">
                    contact@platformresilience.io
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-2xl">
                <div className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F2A44]">Name</label>
                    <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2FA4A9]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F2A44]">Work email</label>
                    <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2FA4A9]" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#0F2A44]">How can we help?</label>
                    <textarea className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-[#2FA4A9]" placeholder="Tell us about your platform, resilience concerns, or the service you’re interested in." />
                  </div>
                  <button className="w-full rounded-2xl bg-[#2FA4A9] px-6 py-3 font-medium text-white hover:opacity-90">
                    Request a resilience review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}