import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import {
    Mail, Phone, FileText, User, FileSignature, NotebookPen
} from 'lucide-react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ViewApplications = () => {
    const { job_id } = useParams();
    const appliedJobData = useLoaderData();

    const handleStatusChange = (e, app_id) => {

        axios.patch(`http://localhost:5000/applications/${app_id}`, { status: e.target.value })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Status updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 text-center">
                {appliedJobData.length} Application{appliedJobData.length !== 1 && 's'} for Job ID: {job_id}
            </h2>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {appliedJobData.map((application, index) => (
                    <div
                        key={application._id}
                        className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                        <h3 className="text-lg font-semibold text-indigo-600 mb-2 flex items-center gap-2">
                            <NotebookPen size={18} /> Application #{index + 1} - {application.title}
                        </h3>

                        <div className="space-y-2 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-indigo-500" />
                                <span className="font-medium">Name:</span> {application.fullName}
                            </div>

                            <div className="flex items-center gap-2">
                                <Phone size={16} className="text-indigo-500" />
                                <span className="font-medium">Phone:</span> {application.phone}
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail size={16} className="text-indigo-500" />
                                <span className="font-medium">Email:</span> {application.applicant}
                            </div>

                            <div className="flex items-start gap-2">
                                <FileSignature size={16} className="text-indigo-500 mt-0.5" />
                                <div>
                                    <p className="font-medium">Cover Letter:</p>
                                    <p className="text-gray-600 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                                        {application.coverLetter}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <FileText size={16} className="text-indigo-500" />
                                <span className="font-medium">Resume:</span>
                                <a
                                    href={application.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    View Resume
                                </a>
                            </div>

                            {/* Status Dropdown */}
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Application Status</label>
                                <select
                                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    defaultValue={application.status}
                                    onChange={e => handleStatusChange(e, application._id)}
                                >
                                    <option value="update Status" disabled>Update Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Accepted">Accepted</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewApplications;
