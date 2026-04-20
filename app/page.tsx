export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-purple-50 flex items-center justify-center px-6">
      
      <div className="text-center max-w-2xl">
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          MediLink
        </h1>

        <h2 className="text-3xl font-semibold text-purple-600 mb-6">
          One Health ID. A Lifetime of Records.
        </h2>

        <p className="text-gray-600 mb-8">
          Store, manage, and access all your medical records in one place — securely, instantly, and anytime.
        </p>

        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition shadow-lg">
          Get Started
        </button>

      </div>

    </main>
  );
}