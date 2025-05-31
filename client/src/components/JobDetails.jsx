import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { JobContext } from "../context/jobContext";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const { selectedJobId } = useContext(JobContext);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedJobId) return;

    const fetchJob = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`http://localhost:4000/api/jobs/${selectedJobId}`);
        setJob(res.data);
      } catch {
        setError("Failed to fetch job details");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [selectedJobId]);

  if (!selectedJobId) return <p className="text-center mt-10 text-gray-500">No job selected.</p>;
  if (loading) return <p className="text-center mt-10 text-blue-600">Loading job details...</p>;
  if (error) return <p className="text-center mt-10 text-red-600 font-semibold">{error}</p>;
  if (!job) return null;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Job Details</h2>

      <div className="space-y-4 text-gray-700">
        <div><strong>Title:</strong> {job.title}</div>
        <div><strong>Description:</strong> {job.description}</div>
        <div><strong>Company:</strong> {job.company}</div>
        <div><strong>Location:</strong> {job.location}</div>
        <div><strong>Salary:</strong> {job.salary}</div>
        <div><strong>Requirements:</strong> {job.requirements}</div>
        <div><strong>Job Type:</strong> {job.jobType}</div>
      </div>
        <div className="mt-6 flex justify-between">
        <button
          onClick={() => navigate("/jobs/all-jobs")}
          className="border border-gray-300 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
        >
          Back to Jobs List
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
