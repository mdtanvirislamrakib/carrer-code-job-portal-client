import React, { use } from 'react';
import { Briefcase, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router';

const JobsOfTheDay = ({ jobsDataPromise }) => {
  const jobs = use(jobsDataPromise);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">Jobs of the Day</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
          Discover exciting career opportunities tailored just for you. Apply now and take your career to the next level!
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:scale-y-105"
          >
            {/* Company Info */}
            <div className="flex items-center mb-4">
              <img
                src={job.company_logo}
                alt={job.company}
                className="w-12 h-12 rounded-lg mr-4 object-contain border border-gray-100"
              />
              <div>
                <h4 className="text-md font-semibold text-gray-800">{job.company}</h4>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> {job.location}
                </p>
              </div>
            </div>

            {/* Job Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">{job.title}</h3>

            {/* Tags: Full time + posted date */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" /> {job.jobType}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> Posted 2 years ago
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {job.description}
            </p>

            {/* Requirements Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {job.requirements.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Salary + Apply Button */}
            <div className="flex justify-between items-center">
              <p className="text-indigo-600 font-bold text-lg">
                ৳{job.salaryRange?.max?.toLocaleString()}/
                <span className="text-sm font-medium text-gray-500">Month</span>
              </p>
              <button
                className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition cursor-pointer"
              >
                <Link to={`/jobs/${job._id}`}>Show Details</Link>
                
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobsOfTheDay;
