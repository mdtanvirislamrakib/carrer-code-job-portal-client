import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Paperclip, SendHorizonal } from 'lucide-react';

const JobApply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Application submitted successfully!');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-lg mx-auto p-8 bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl"
    >
      <div className="mb-8 text-center">
        <p className="text-xs text-blue-500 font-semibold uppercase tracking-wider bg-blue-100 inline-block px-3 py-1 rounded-full">
          Job Application
        </p>
        <h1 className="text-3xl font-extrabold  mt-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Start Your Career Today
        </h1>
        <p className="text-sm text-gray-500 mt-2">Please fill in your information and send it to the employer.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
          <input
            type="text"
            readOnly
            value="#Z394_Figma Designer"
            className="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="fullName"
            required
            onChange={handleChange}
            placeholder="e.g. MD. Tanvir Islam Rakib"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Contact Number <span className="text-red-500">*</span></label>
          <input
            type="tel"
            name="phone"
            required
            onChange={handleChange}
            placeholder="+8801XXXXXXXXX"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none transition"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Cover Letter</label>
          <textarea
            name="coverLetter"
            rows="4"
            onChange={handleChange}
            placeholder="Tell us why you're a great fit..."
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm shadow-sm focus:ring-2 focus:ring-indigo-300 focus:outline-none transition resize-none"
          ></textarea>
        </div>

        {/* Resume Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1 lg:flex items-center gap-1">
            <Paperclip className="w-4 h-4 text-gray-500" /> Resume <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            className="block w-full text-sm border border-gray-300 rounded-xl px-4 py-2"
          />
          <p className="text-xs text-gray-500 mt-1">Allowed: <span className="text-pink-500">.pdf, .doc, .docx</span> (max 2MB)</p>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:to-pink-600 text-white font-semibold py-2.5 rounded-xl shadow-lg transition-all"
        >
          <SendHorizonal size={18} />
          Submit Application
        </motion.button>
      </form>

      <p className="text-center text-sm text-gray-500 mt-6">
        Need help? <a href="#" className="text-indigo-600 font-medium hover:underline">Contact Us</a>
      </p>
    </motion.div>
  );
};

export default JobApply;
