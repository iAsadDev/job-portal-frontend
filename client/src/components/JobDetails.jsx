import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { JobContext } from "../context/jobContext";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Building,
  MapPin,
  DollarSign,
  FileText,
  Phone,
  BadgeCheck,
} from "lucide-react";

const JobDetails = () => {
  const { selectedJobId } = useContext(JobContext);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!selectedJobId) return;

    const fetchJob = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(`${baseURL}/jobs/${selectedJobId}`);
        setJob(res.data);
      } catch {
        setError("❌ Failed to fetch job details.");
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
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Briefcase className="text-blue-600" /> Job Details
      </h2>

      <div className="space-y-4 text-gray-700 text-base leading-relaxed">
        <div className="flex items-center gap-2">
          <BadgeCheck className="text-green-600" />
          <strong>Title:</strong> {job.title}
        </div>
        <div className="flex items-start gap-2">
          <FileText className="text-purple-600 mt-1" />
          <div>
            <strong>Description:</strong>
            <p className="ml-1 text-sm text-gray-600">{job.description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Building className="text-indigo-600" />
          <strong>Company:</strong> {job.company}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="text-pink-600" />
          <strong>Location:</strong> {job.location}
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="text-emerald-600" />
          <strong>Salary:</strong> {job.salary}
        </div>
        <div className="flex items-start gap-2">
          <FileText className="text-orange-600 mt-1" />
          <div>
            <strong>Requirements:</strong>
            <p className="ml-1 text-sm text-gray-600">{job.requirements}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase className="text-blue-600" />
          <strong>Job Type:</strong> {job.jobType}
        </div>
        <div className="flex items-center gap-2">
          <Phone className="text-gray-600" />
          <strong>Contact:</strong> {job.contact}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <button
          onClick={() => navigate("/jobs/all-jobs")}
          className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          ← Back to Jobs List
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
