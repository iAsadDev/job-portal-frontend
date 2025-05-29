import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* HERO SECTION */}
      <Navbar />
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Job</h1>
          <p className="text-lg md:text-xl mb-6">
            Join thousands of professionals hiring or applying through JobHunt.
          </p>
          <Link to="/jobs">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition">
              Explore Jobs
            </button>
          </Link>
        </div>
      </header>

      {/* FEATURES SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: "Verified Listings", desc: "Only genuine employers and job posts." },
              { title: "Easy Apply", desc: "One-click apply to multiple jobs." },
              { title: "Career Guidance", desc: "Resources to grow your career." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB CATEGORIES */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              "Software Development",
              "Marketing",
              "Design",
              "Customer Support",
              "Finance",
              "Education",
              "Healthcare",
              "Engineering",
            ].map((category, i) => (
              <div key={i} className="bg-gray-100 hover:bg-blue-50 p-4 rounded-lg shadow-sm transition">
                <h4 className="font-medium">{category}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm">
          <p>© 2025 JobHunt. All rights reserved.</p>
          <div className="space-x-4">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
