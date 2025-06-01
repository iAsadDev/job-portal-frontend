import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../utils/auth'; // ✅ Adjust the path as needed

const JobCreateForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    company: '',
    location: '',
    salary: '',
    requirements: '',
    contact: '',
    jobType: 'Full-time',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getToken();
    if (!token) {
      setMessage('User not authenticated. Please log in.');
      return;
    }

    try {
      await axios.post('https://job-portal-backend-production-5ffc.up.railway.app/api/jobs/create', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/all-jobs'); // 🔁 Redirect after success
    } catch (err) {
      console.error("Error response:", err.response);
      setMessage(err.response?.data?.message || 'Failed to create job');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow-lg rounded-xl mt-10 bg-white">
      <h2 className="text-2xl font-bold mb-4">Create New Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Title', name: 'title' },
          { label: 'Description', name: 'description' },
          { label: 'Company', name: 'company' },
          { label: 'Location', name: 'location' },
          { label: 'Salary', name: 'salary', type: 'number' },
          { label: 'Requirements', name: 'requirements' },
          { label: 'Contact', name: 'contact' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name}>
            <label className="block text-sm font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded-lg"
          >
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Create Job
        </button>

        {message && (
          <p className="text-center text-sm mt-2 text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default JobCreateForm;
