import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { JobContext } from "../context/jobContext";
import { useNavigate } from "react-router-dom";

const JobsList = () => {
    const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { onSelectJob } = useContext(JobContext);  // Use onSelectJob from context

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get("http://localhost:4000/api/jobs/all-jobs");
        setJobs(res.data);
      } catch (err) {
        setError("Failed to fetch jobs: " + (err.response?.data?.error || err.message));
      }
      setLoading(false);
    };
    fetchJobs();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500 mt-10 text-lg">Loading jobs...</p>;
  if (error)
    return <p className="text-center text-red-600 mt-10 text-lg font-semibold">{error}</p>;
  if (jobs.length === 0)
    return <p className="text-center text-gray-500 mt-10 text-lg">No jobs available.</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Available Jobs</h2>
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <li
            key={job._id}
            onClick={() => onSelectJob(job._id)}
            className="cursor-pointer bg-white shadow-md rounded-lg p-5 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {job.company}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-medium">Location:</span> {job.location || "Remote"}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Type:</span> {job.jobType || "N/A"}
              </p>
            </div>
            <div className="mt-4">
              <button
                className="w-full text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectJob(job._id);
                  navigate(`/jobs/${job._id}`); // Navigate to job details page
                }}
              >
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsList;
