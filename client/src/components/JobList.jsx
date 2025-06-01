import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { JobContext } from "../context/jobContext";
import { useNavigate } from "react-router-dom";

const JobsList = () => {
  const navigate = useNavigate();
  const { onSelectJob } = useContext(JobContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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

  if (loading) {
    return <p className="text-center text-blue-500 mt-12 text-lg">Loading jobs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 mt-12 text-lg">{error}</p>;
  }

  if (jobs.length === 0) {
    return <p className="text-center text-gray-500 mt-12 text-lg">No jobs available at the moment.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Available Jobs</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">{job.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Company:</span> {job.company}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Location:</span> {job.location || "Remote"}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Job Type:</span> {job.jobType || "N/A"}
              </p>
              {job.salary && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Salary:</span> ${job.salary}
                </p>
              )}
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              onClick={() => {
                onSelectJob(job._id);
                navigate(`/jobs/${job._id}`);
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
