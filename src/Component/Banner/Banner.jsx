import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSearch, FiBriefcase, FiMapPin } from 'react-icons/fi';
import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'



const Banner = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchTerm, location, jobType });
  };

  return (
    <section className=" py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h1
            className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Discover Your <motion.span 
            animate={{
              color: ['#1e81eb', '#651eeb', '#eb1e56', '#1eeb56'],
              transition: {duration: 2, repeat: Infinity}
            }}
            className="text-indigo-600">Dream Job</motion.span> Today
          </h1>

          <p className="text-lg text-gray-700">
            Explore thousands of top opportunities across the globe. Smart filters, quick access, and the best career matches.
          </p>

          {/* Glassmorphic Search Box */}
          <div
            className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/30"
          >
            <form onSubmit={handleSearch} className="space-y-4">
              {/* Search Input */}
              <div className="flex items-center bg-white rounded-xl px-4 py-3 border border-gray-300 shadow-sm">
                <FiSearch className="text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  className="w-full bg-transparent focus:outline-none text-gray-800"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Location & Job Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center bg-white rounded-xl px-4 py-3 border border-gray-300 shadow-sm">
                  <FiMapPin className="text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full bg-transparent focus:outline-none text-gray-800"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="flex items-center bg-white rounded-xl px-4 py-3 border border-gray-300 shadow-sm">
                  <FiBriefcase className="text-gray-400 mr-3" />
                  <select
                    className="w-full bg-transparent focus:outline-none text-gray-800"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                  >
                    <option value="">Select Job Type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="remote">Remote</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <FiSearch className="mr-2" />
                Search Jobs
              </button>
            </form>
          </div>
        </div>

        {/* Right Visuals */}
        <div className="relative hidden lg:block h-[28rem]">
          {/* Top Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            dir='ltb'
            className="absolute top-0 right-0 max-w-sm h-auto overflow-hidden shadow-xl "
          >
            <img
              src={team1}
              alt="Professional"
              className="w-full h-full object-cover rounded-t-2xl rounded-br-2xl border-s-8 border-b-8 border-indigo-500"
            />
          </motion.div>

          {/* Bottom Image */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            dir='ltb'
            className="absolute bottom-0 left-0 max-w-sm h-auto overflow-hidden shadow-xl "
          >
            <img
              src={team2}
              alt="Team Meeting"
              className="w-full h-full object-cover rounded-t-2xl rounded-br-2xl border-s-8 border-b-8 border-indigo-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
