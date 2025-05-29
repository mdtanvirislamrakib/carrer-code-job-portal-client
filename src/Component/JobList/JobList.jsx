import React, { use } from 'react';
import {
    Briefcase,
    MapPin,
    Building2,
    CalendarDays,
    DollarSign,
    Mail,
    User,
    Eye
} from 'lucide-react';
import { Link } from 'react-router';

const JobList = ({ jobUploadPromise }) => {
    const jobData = use(jobUploadPromise);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
                Total Jobs: {jobData.length}
            </h2>

            <div className="overflow-x-auto bg-white shadow-md rounded-xl ring-1 ring-gray-200">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-indigo-600 text-white text-sm font-semibold">
                        <tr>
                            <th className="px-4 py-3">#</th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><Briefcase size={16} /> Title</div></th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><MapPin size={16} /> Location</div></th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><Building2 size={16} /> Company</div></th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><CalendarDays size={16} /> Deadline</div></th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><DollarSign size={16} /> Salary</div></th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><User size={16} /> HR</div></th>
                            <th className="px-4 py-3"><div className="flex items-center gap-1"><Mail size={16} /> Email</div></th>
                            <th className="px-4 py-3 flex items-center gap-1"><Eye size={16} />View Detail</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {jobData.map((job, index) => (
                            <tr key={job._id} className="hover:bg-gray-50 transition">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3 capitalize">{job.title}</td>
                                <td className="px-4 py-3">{job.location}</td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={job.company_logo}
                                            alt={job.company}
                                            className="w-6 h-6 rounded-full object-cover border"
                                        />
                                        {job.company}
                                    </div>
                                </td>
                                <td className="px-4 py-3">{job.deadline}</td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    {job.salaryRange.min} - {job.salaryRange.max}{" "}
                                    <span className="uppercase">{job.salaryRange.currency}</span>
                                </td>
                                <td className="px-4 py-3">{job.hr_name}</td>
                                <td className="px-4 py-3">{job.hr_email}</td>
                                <td className="px-4 py-3">
                                    <Link
                                        to={`/applications/${job._id}`}
                                        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium"
                                    >
                                        <Eye size={16} /> View
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobList;
