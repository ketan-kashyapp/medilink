export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 px-6 py-4">
      {/* NAVBAR */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-violet-600">MediLink</h1>

        <div className="hidden items-center gap-6 text-gray-600 md:flex">
          <a href="#" className="transition hover:text-violet-600">
            Features
          </a>
          <a href="#" className="transition hover:text-violet-600">
            About
          </a>
          <a href="#" className="transition hover:text-violet-600">
            Contact
          </a>
        </div>

        <button className="rounded-xl bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700">
          Login
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="mx-auto flex min-h-[72vh] max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="max-w-2xl text-center lg:text-left">
          <span className="inline-block rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
            AI-Powered Unified Health Records
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-7xl">
            MediLink
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-violet-600 md:text-3xl">
            One Health ID. A Lifetime of Records.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Store, manage, and access all your medical records in one secure
            place. From prescriptions to emergency details, MediLink helps
            patients and doctors stay connected through a smarter digital system.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-2xl bg-violet-600 px-6 py-3 text-white shadow-lg transition hover:bg-violet-700">
              Get Started
            </button>

            <button className="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-gray-700 transition hover:border-violet-300 hover:text-violet-600">
              View Demo
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">

            {[
              { value: "10K+", label: "Health Records" },
              { value: "200+", label: "Doctors Connected" },
              { value: "24/7", label: "Emergency Access" },
            ].map((item, i) => (
              <div
                key={i}
                className="group cursor-pointer rounded-2xl bg-white/70 p-4 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.05] hover:shadow-xl"
              >
                <p className="text-2xl font-bold text-violet-600 transition group-hover:text-fuchsia-500">
                  {item.value}
                </p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="mt-2 w-full max-w-lg lg:mt-0">
          <div className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(91,33,182,0.12)] backdrop-blur-md">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-gray-500">Patient Dashboard</p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Ketan Kashyap
                </h3>
                <p className="mt-1 text-sm text-gray-500">Age: 20</p>
              </div>

              <div className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-600">
                Emergency Ready
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl bg-violet-50 p-4">
                <p className="text-sm text-gray-500">Health ID</p>
                <p className="mt-1 font-semibold text-gray-900">
                  ML-KETAN-2026
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Blood Group</p>
                  <p className="mt-1 font-semibold text-gray-900">B+</p>
                </div>

                <div className="rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm text-gray-500">Allergy</p>
                  <p className="mt-1 font-semibold text-gray-900">
                    Dust Allergy
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Last Prescription</p>
                <p className="mt-1 font-semibold text-gray-900">
                  General Checkup + Vitamin D
                </p>
                <p className="mt-1 text-sm text-gray-500">Updated 2 days ago</p>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-4 text-white">
                <p className="text-sm opacity-90">AI Insight</p>
                <p className="mt-1 font-semibold">
                  Repeated health activity detected. Keep your records updated
                  for better consultation.
                </p>
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-gray-400">
              Demo profile — real patient data will be securely stored
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="mx-auto mt-4 max-w-7xl rounded-3xl bg-white/60 px-6 py-20 backdrop-blur-md">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Everything you need for smarter healthcare
          </h2>

          <p className="mt-4 text-gray-600">
            Manage records, access emergency data, and get AI-powered insights
            — all in one place.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

          {[
            {
              icon: "🆔",
              title: "Unique Health ID",
              desc: "One permanent ID for your complete medical history.",
            },
            {
              icon: "📁",
              title: "Medical Records",
              desc: "Access all prescriptions, reports, and history anytime.",
            },
            {
              icon: "🤖",
              title: "AI Insights",
              desc: "Smart analysis of your health data for better decisions.",
            },
            {
              icon: "🚑",
              title: "Emergency Access",
              desc: "Instant access to critical data using QR code.",
            },
            {
              icon: "🔐",
              title: "Secure Sharing",
              desc: "Share your records securely with doctors anytime.",
            },
            {
              icon: "🛡️",
              title: "Privacy Control",
              desc: "Full control over who can access your data.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="rounded-3xl border border-violet-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl shadow-sm">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {card.desc}
              </p>
            </div>
          ))}

        </div>
      </section>
    </main >
  );
}