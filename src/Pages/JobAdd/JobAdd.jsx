import React, { use } from 'react';
import {
    Briefcase,
    MapPin,
    Building2,
    CalendarDays,
    ClipboardList,
    ClipboardEdit,
    Mail,
    User,
    Link,
} from 'lucide-react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobAdd = () => {
    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // process salary range data
        const { min, max, currency, ...newJob } = data;
        newJob.salaryRange = { min, max, currency }

        // process requirment
        newJob.requirements = newJob.requirements.split(",").map(req => req.trim())

        // process responsiblities
        newJob.responsibilities = newJob.responsibilities.split(",").map(res => res.trim());

        // add status in add job data
        newJob.status = "active"


        // add job to the database
        axios.post("http://localhost:5000/jobs", newJob)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Job Post Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })

        // console.log(newJob);

    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Post a New Job</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

                {/* Job Title */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <Briefcase size={18} /> Job Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Software Engineer"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <MapPin size={18} /> Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        placeholder="Halishohor, Chittagong"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Job Type */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <ClipboardList size={18} /> Job Type
                    </label>
                    <select
                        name="jobType"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        <option value="">Select</option>
                        <option value="Remote">REMOTE</option>
                        <option value="Onsite">ONSITE</option>
                        <option value="Hybrid">HYBRID</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <Building2 size={18} /> Category
                    </label>
                    <input
                        type="text"
                        name="category"
                        placeholder="Engineering, Marketing..."
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Application Deadline */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <CalendarDays size={18} /> Application Deadline
                    </label>
                    <input
                        type="date"
                        name="deadline"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Salary Range */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="flex items-center gap-2 font-medium text-indigo-700">
                            Min Salary
                        </label>
                        <input
                            type="number"
                            name="min"
                            placeholder="40000"
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="font-medium text-indigo-700">Max Salary</label>
                        <input
                            type="number"
                            name="max"
                            placeholder="60000"
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />
                    </div>
                    <div>
                        <label className="font-medium text-indigo-700">Currency</label>
                        <select
                            name="currency"
                            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        >
                            <option value="">Select</option>
                            <option value="bdt">BDT</option>
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                        </select>
                    </div>
                </div>

                {/* Job Description */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <ClipboardEdit size={18} /> Job Description
                    </label>
                    <textarea
                        name="description"
                        rows="4"
                        placeholder="Describe the responsibilities..."
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    ></textarea>
                </div>

                {/* Requirements */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <ClipboardList size={18} /> Requirements
                    </label>
                    <input
                        type="text"
                        name="requirements"
                        placeholder="JavaScript, React, Node.js"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Responsibilities */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <ClipboardList size={18} /> Responsibilities
                    </label>
                    <input
                        type="text"
                        name="responsibilities"
                        placeholder="Develop, maintain..."
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* HR Email */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <Mail size={18} /> HR Email
                    </label>
                    <input
                        type="email"
                        name="hr_email"
                        readOnly
                        value={user.email}
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* HR Name */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <User size={18} /> HR Name
                    </label>
                    <input
                        type="text"
                        name="hr_name"
                        placeholder="Farhan Rahman"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Company */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <Building2 size={18} /> Company Name
                    </label>
                    <input
                        type="text"
                        name="company"
                        placeholder="Favorite IT"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Company Logo URL */}
                <div>
                    <label className="flex items-center gap-2 font-medium text-indigo-700">
                        <Link size={18} /> Company Logo URL
                    </label>
                    <input
                        type="text"
                        name="company_logo"
                        placeholder="https://example.com/logo.png"
                        className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition"
                    >
                        Post Job
                    </button>
                </div>
            </form>
        </div>
    );
};

export default JobAdd;
