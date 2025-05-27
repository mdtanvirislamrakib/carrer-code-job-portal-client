import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Paperclip, SendHorizonal } from 'lucide-react';
import { useLoaderData, useParams } from 'react-router';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const { user } = use(AuthContext)
    console.log(user);


    const handleJobApply = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const fullName = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const coverLetter = form.coverLetter.value;
        const resume = form.resume.value;

        console.log({ title, fullName, email, phone, coverLetter, resume });

        const application = {
            id,
            applicant: user.email,
            title,
            fullName,
            phone,
            coverLetter,
            resume,
        }

        axios.post("http://localhost:5000/applications", application)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your wapplication has been submited",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.log(err);
            })

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

            <form onSubmit={handleJobApply} className="space-y-5">
                {/* Job Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                    <input
                        type="text"
                        readOnly
                        value={data.title}
                        name='title'
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
                        value={user.email}
                        readOnly
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
                        type="link"
                        name="resume"
                        required
                        placeholder='Enter youre Resume Link'
                        className="block w-full text-sm border border-gray-300 rounded-xl px-4 py-2"
                    />
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
