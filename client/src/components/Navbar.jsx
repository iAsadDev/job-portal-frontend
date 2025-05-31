import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (isLoading) return null;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-blue-600 text-2xl font-bold">
            Job<span className="text-gray-800">Hunt</span>
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>

            {/* Plain links without dropdown */}
            <Link to="/jobs/all-jobs" className="text-gray-700 hover:text-blue-600">
              Jobs List
            </Link>
            <Link to="/jobs/create" className="text-gray-700 hover:text-blue-600">
              Create Job
            </Link>

            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
                    Register
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(!open)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/jobs/all-jobs"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Jobs List
          </Link>
          <Link
            to="/jobs/create"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            Create Job
          </Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">
            Contact
          </Link>

          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="w-full text-left text-red-600 font-semibold"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="block text-blue-600 font-semibold">
                Login
              </Link>
              <Link to="/register" className="block text-blue-600 font-semibold">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
