import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                JobPortal
              </span>
              <span className="ml-1.5 w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting top talent with world-class companies since 2023.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <FaGithub size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Browse Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Companies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Career Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Salary Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Resume Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-gray-600 text-sm">
                  1234 Career Lane, Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li>
                <a href="mailto:info@jobportal.com" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  info@jobportal.com
                </a>
              </li>
              <li>
                <a href="tel:+11234567890" className="text-gray-600 hover:text-indigo-600 text-sm transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;