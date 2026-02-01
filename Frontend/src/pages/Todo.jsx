import { Link } from "react-router-dom";

export default function Todo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Manage Your Tasks Smarter  
        </h1>

        <p className="mt-4 max-w-xl text-gray-300 text-lg">
          A simple and powerful MERN Todo app to organize your daily work and
          stay productive.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/todo"
            className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition font-medium"
          >
            Go to Todos
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 rounded-lg border border-gray-400 hover:bg-white hover:text-black transition font-medium"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Why Use This App?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">📝 Task Management</h3>
            <p className="text-gray-300">
              Easily create, update, and delete your daily tasks.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2"></h3>
            <p className="text-gray-300">
              Mark tasks as completed and stay organized.
            </p>
          </div>

          <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast & Secure</h3>
            <p className="text-gray-300">
              Built with MERN stack following clean architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 py-6 text-center text-gray-400">
        © {new Date().getFullYear()} • MERN Todo App
      </footer>
    </div>
  );
}
