import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/todo"
            className="text-xl font-bold text-indigo-600"
          >
            📝 TodoApp
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/todo"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600"
            >
              All Todos
            </Link>

            <Link
              to="/completed"
              className="text-sm font-medium text-gray-600 hover:text-indigo-600"
            >
              Completed
            </Link>

            <button
              onClick={handleLogout}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <div className="px-4 py-3 space-y-3">
            <Link
              to="/todo"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-indigo-600"
            >
              All Todos
            </Link>

            <Link
              to="/completed"
              onClick={() => setOpen(false)}
              className="block text-gray-700 hover:text-indigo-600"
            >
              Completed
            </Link>

            <button
              onClick={handleLogout}
              className="w-full text-left text-gray-700 hover:text-red-600"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
