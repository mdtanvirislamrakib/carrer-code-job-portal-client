import React from 'react';
import { Briefcase, MapPin, Clock, Mail, BadgeCheck, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLoaderData, useNavigate } from 'react-router';
import Lottie from 'lottie-react';
import detailsLottie from '../../assets/lotties/details-lottie.json';

const JobDetails = () => {
    const job = useLoaderData();
    const navigate = useNavigate();

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden my-10 border border-gray-100"
        >
            {/* Back Button */}
            <div className="px-6 py-4">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-sm text-indigo-600 hover:text-indigo-800 transition"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Jobs
                </button>
            </div>

            {/* Header with Company Info and Lottie */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-8 py-4 bg-white border-b border-gray-200">
                {/* Company Logo and Info */}
                <div className="flex items-center gap-6">
                    <img
                        src={job.company_logo}
                        alt={job.company}
                        className="w-20 h-20 rounded-xl object-contain border border-gray-200 bg-white shadow"
                    />
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                        <p className="text-gray-600">{job.company}</p>
                        <p className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <MapPin className="w-4 h-4" /> {job.location}
                        </p>
                    </div>
                </div>

                {/* Floating Lottie Animation */}
                <motion.div
                    animate={{
                        y: [0, -10, 0], // float effect
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: 'easeInOut',
                    }}
                    className="w-40 lg:w-52"
                >
                    <Lottie animationData={detailsLottie} loop={true} />
                </motion.div>
            </div>

            {/* Job Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-6 border-b border-gray-100 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                    <Briefcase className="w-4 h-4 text-indigo-500" />
                    <span>Job Type: <strong>{job.jobType}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4 text-indigo-500" />
                    <span>Deadline: <strong>{job.applicationDeadline}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                    <BadgeCheck className="w-4 h-4 text-green-500" />
                    <span>Status: <strong className={job.status === 'active' ? 'text-green-600' : 'text-red-500'}>{job.status}</strong></span>
                </div>
            </div>

            {/* Description */}
            <div className="px-8 py-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            {/* Requirements */}
            <div className="px-8 py-6 bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Requirements</h2>
                <ul className="flex flex-wrap gap-3">
                    {job.requirements.map((skill, i) => (
                        <li key={i} className="px-4 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full font-medium shadow-sm">
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Responsibilities */}
            <div className="px-8 py-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Responsibilities</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                    {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-8 py-6 border-t border-gray-100 gap-4 bg-white">
                {/* Salary */}
                <div>
                    <p className="text-gray-600 text-sm mb-1">Monthly Salary</p>
                    <p className="text-indigo-600 font-bold text-xl">
                        ৳{job.salaryRange.min.toLocaleString()} – ৳{job.salaryRange.max.toLocaleString()}
                    </p>
                </div>

                {/* HR Info */}
                <div>
                    <p className="text-sm text-gray-600">HR Contact: <span className="font-medium text-gray-800">{job.hr_name}</span></p>
                    <p className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-indigo-500" /> {job.hr_email}
                    </p>
                </div>

                {/* Apply Button */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${job.hr_email}`}
                    className="mt-4 md:mt-0 px-6 py-2 bg-indigo-600 text-white rounded-md font-semibold transition-all shadow hover:bg-indigo-700"
                >
                    Apply Now
                </motion.a>
            </div>
        </motion.section>
    );
};

export default JobDetails;
