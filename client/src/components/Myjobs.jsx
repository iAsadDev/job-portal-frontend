import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMyJobs = async () => {
      try {
        const res = await axios.get('https://job-portal-backend-production-5ffc.up.railway.app/api/jobs/my-jobs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobs(res.data);
      } catch (error) {
        console.error("Error fetching my jobs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await axios.delete(`https://job-portal-backend-production-5ffc.up.railway.app/api/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setJobs(jobs.filter(job => job._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/jobs/edit/${id}`);
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading your jobs...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">My Posted Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">You haven't posted any jobs yet.</p>
      ) : (
        <div className="grid gap-6">
          {jobs.map(job => (
            <div
              key={job._id}
              className="p-6 bg-white shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-700 mb-2">{job.description}</p>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                <p><span className="font-medium">Company:</span> {job.company}</p>
                <p><span className="font-medium">Location:</span> {job.location}</p>
                <p><span className="font-medium">Salary:</span> {job.salary}</p>
                <p><span className="font-medium">Type:</span> {job.jobType}</p>
                <p><span className="font-medium">Contact:</span> {job.contact}</p>
                <p className="col-span-2"><span className="font-medium">Requirements:</span> {job.requirements}</p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => handleEdit(job._id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyJobs;
