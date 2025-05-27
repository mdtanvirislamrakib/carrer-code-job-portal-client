import React, { use } from 'react';
import { Briefcase, Clock, MapPin } from 'lucide-react';



const JobsOfTheDay = ({jobsDataPromise}) => {
  
  const jobs = use(jobsDataPromise)



  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Jobs of the Day</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job._id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              {/* Company Info */}
              <div className="flex items-center mb-4">
                <img src={job.company_logo} alt={job.company} className="w-12 h-12 rounded-md mr-3 object-contain" />
                <div>
                  <h4 className="text-md font-semibold text-gray-800">{job.company}</h4>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {job.location}
                  </p>
                </div>
              </div>

              {/* Job Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>

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

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.slice(0, 3).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Salary + Apply */}
              <div className="flex justify-between items-center">
                <p className="text-indigo-600 font-bold text-lg">
                  ৳{job.salaryRange?.max?.toLocaleString()}/<span className="text-sm font-medium text-gray-500">Month</span>
                </p>
                <a
                  href={`mailto:${job.hr_email}`}
                  className="px-4 py-2 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsOfTheDay;
