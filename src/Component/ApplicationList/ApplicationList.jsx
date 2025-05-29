import React, { use } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Paperclip,
  User,
  FileText,
  Briefcase,
  Building2,
} from 'lucide-react';

const ApplicationList = ({ applicationDataPromise }) => {
  const applicationList = use(applicationDataPromise);

  return (
    <div className="min-h-screen py-10 px-4">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 mb-2"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        All Job Applications
      </motion.h1>
      <p className="text-center text-gray-600 mb-8 text-sm md:text-base">
        All submitted applications with complete applicant information and documents.
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full shadow-xl rounded-lg overflow-hidden">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><Briefcase size={16} /> Title</div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><User size={16} /> Name</div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><Mail size={16} /> Email</div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><Phone size={16} /> Phone</div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><FileText size={16} /> Cover Letter</div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><Paperclip size={16} /> Resume</div>
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2"><Building2 size={16} /> Company</div>
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {applicationList.map((app) => (
              <tr key={app._id} className="hover:bg-indigo-50 transition">
                <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap font-semibold">
                  {app.title}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                  {app.fullName}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap max-w-[180px] overflow-hidden text-ellipsis">
                  {app.applicant}
                </td>
                <td className="px-4 py-3 text-sm text-gray-700 whitespace-nowrap">
                  {app.phone}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap max-w-[220px]">
                  <div title={app.coverLetter} className="truncate cursor-help">
                    {app.coverLetter}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-indigo-600 whitespace-nowrap">
                  <a
                    href={app.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline font-medium"
                  >
                    View Resume
                  </a>
                </td>
                <td className="px-4 py-3 text-sm text-gray-800 whitespace-nowrap flex items-center gap-2">
                  <img
                    src={app.company_logo}
                    alt={app.company}
                    className="w-6 h-6 rounded-full border"
                  />
                  <span>{app.company}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
