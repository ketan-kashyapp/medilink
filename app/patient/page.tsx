export default function PatientDashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 px-6 py-6">
      {/* TOP BAR */}
      <section className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-md md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-violet-600">Patient Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900 md:text-4xl">
              Welcome back, Ketan Kashyap
            </h1>
            <p className="mt-2 text-gray-600">
              Access your records, prescriptions, and insights in one place.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-2xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700">
              Download Records
            </button>
            <button className="rounded-2xl border border-violet-200 bg-white px-5 py-3 text-gray-700 transition hover:border-violet-300 hover:text-violet-600">
              Share Health ID
            </button>
          </div>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="mx-auto mt-8 grid max-w-7xl gap-6 lg:grid-cols-3">
        {/* LEFT COLUMN */}
        <div className="space-y-6 lg:col-span-2">
          {/* PROFILE + HEALTH ID */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Profile</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">
                Ketan Kashyap
              </h2>

              <div className="mt-5 space-y-3 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">Age:</span> 20
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Gender:</span> Male
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Phone:</span> +91 98XXXXXX21
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Email:</span> ketan@example.com
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">Health ID</p>
              <h2 className="mt-3 text-2xl font-bold text-violet-600">
                ML-KETAN-2026
              </h2>

              <div className="mt-5 rounded-2xl bg-violet-50 p-4">
                <p className="text-sm text-gray-500">Quick Access</p>
                <p className="mt-2 font-semibold text-gray-900">
                  QR-based secure access enabled
                </p>
              </div>

              <button className="mt-4 w-full rounded-2xl border border-violet-200 bg-white px-4 py-3 text-gray-700 transition hover:border-violet-300 hover:text-violet-600">
                View QR Code
              </button>
            </div>
          </div>

          {/* HEALTH DETAILS */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500">Blood Group</p>
              <h3 className="mt-3 text-2xl font-bold text-gray-900">B+</h3>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500">Allergy</p>
              <h3 className="mt-3 text-xl font-bold text-gray-900">
                Dust Allergy
              </h3>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <p className="text-sm text-gray-500">Emergency Status</p>
              <h3 className="mt-3 text-xl font-bold text-red-600">
                Emergency Ready
              </h3>
            </div>
          </div>

          {/* RECENT PRESCRIPTIONS */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Recent Prescriptions</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900">
                  Medical History
                </h2>
              </div>

              <button className="rounded-2xl border border-violet-200 px-4 py-2 text-sm text-violet-600 transition hover:bg-violet-50">
                View All
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      General Checkup + Vitamin D
                    </h3>
                    <p className="text-sm text-gray-500">
                      Dr. Sharma • 20 April 2026
                    </p>
                  </div>
                  <span className="rounded-full bg-violet-50 px-3 py-1 text-sm text-violet-600">
                    Active
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Viral Fever Treatment
                    </h3>
                    <p className="text-sm text-gray-500">
                      City Care Hospital • 12 April 2026
                    </p>
                  </div>
                  <span className="rounded-full bg-fuchsia-50 px-3 py-1 text-sm text-fuchsia-600">
                    Completed
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Allergy Consultation
                    </h3>
                    <p className="text-sm text-gray-500">
                      Dr. Verma • 01 April 2026
                    </p>
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">
                    Archived
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          {/* AI INSIGHT */}
          <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-500 p-6 text-white shadow-lg">
            <p className="text-sm opacity-90">AI Insight</p>
            <h2 className="mt-3 text-2xl font-bold">
              Repeated health activity detected
            </h2>
            <p className="mt-3 text-sm leading-7 opacity-90">
              Your recent history shows repeated fever and vitamin-related
              consultations. Keeping your records updated can help doctors make
              faster and better decisions.
            </p>
          </div>

          {/* APPOINTMENT STATUS */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Upcoming Appointment</p>
            <h3 className="mt-3 text-xl font-bold text-gray-900">
              Dr. Sharma
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              25 April 2026 • 11:30 AM
            </p>

            <button className="mt-5 w-full rounded-2xl bg-violet-600 px-4 py-3 text-white transition hover:bg-violet-700">
              View Details
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">Quick Actions</p>

            <div className="mt-5 space-y-3">
              <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-violet-300 hover:text-violet-600">
                Update Personal Info
              </button>

              <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-violet-300 hover:text-violet-600">
                Upload New Report
              </button>

              <button className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-left text-gray-700 transition hover:border-violet-300 hover:text-violet-600">
                Manage Privacy Settings
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}