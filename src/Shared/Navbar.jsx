import { useState, useEffect, use } from "react";
import { NavLink, useNavigate } from "react-router";
import { FiMenu, FiX, FiUser, FiLogIn, FiLogOut } from "react-icons/fi";
import AuthContext from "../Contexts/AuthContext/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { user, logout } = use(AuthContext);

  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "Companies", path: "/companies" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // sign out user
  const handleLogOut = () => {
    logout()
    .then(() => {
      alert("Logout Successfull");
      navigate('/login')
    })
    .catch(err => {
      alert(err.message);
    })
  }




  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-gradient-to-r from-blue-50 to-indigo-50 shadow-sm"
        : "bg-base-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-2xl font-bold flex items-center"
            >
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                JobPortal
              </span>
              <span className="ml-1.5 w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => // isActive is now properly defined here
                  `px-4 py-2 text-sm font-medium transition-colors duration-200 relative group ${isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                  }`
                }
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full ${location.pathname === link.path ? "w-4/5" : ""
                    }`}
                ></span>
              </NavLink>
            ))}
          </nav>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Auth Buttons - Desktop */}
            {
              user ? <button
                onClick={handleLogOut}
                className="relative flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 text-indigo-700 hover:text-indigo-800 transition-all duration-300 group shadow-sm border border-indigo-100 cursor-pointer"
              >
                <FiLogOut className="mr-3 text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-0.5 transition-transform" />
                <span className="font-semibold">Logout</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button> : <div className="hidden md:flex items-center space-x-3">
                <NavLink
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors flex items-center"
                >
                  <FiLogIn className="mr-2" />
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg hover:from-indigo-700 hover:to-blue-700 transition-all shadow-md hover:shadow-lg flex items-center"
                >
                  <FiUser className="mr-2" />
                  Sign Up
                </NavLink>
              </div>
            }


            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-800" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-50 to-indigo-50 shadow-xl rounded-b-lg mx-4 overflow-hidden transition-all duration-300">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => // isActive properly defined here
                  `block px-4 py-3 text-base font-medium rounded-md transition-colors ${isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {
              user ? <button
                onClick={handleLogOut}
                className="relative flex items-center px-4 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 hover:from-indigo-100 hover:to-blue-100 text-indigo-700 hover:text-indigo-800 transition-all duration-300 group shadow-sm border border-indigo-100 cursor-pointer"
              >
                <FiLogOut className="mr-3 text-indigo-600 group-hover:text-indigo-700 group-hover:translate-x-0.5 transition-transform" />
                <span className="font-semibold">Logout</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button> : <div className="pt-2 flex items-center justify-between  border-t border-gray-200">

                <NavLink
                  to="/login"
                  className="px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center"
                >
                  <FiLogIn className="mr-2" />
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  className="px-4 py-3 mt-1 text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-md hover:from-indigo-700 hover:to-blue-700 transition-all flex items-center"
                >
                  <FiUser className="mr-2" />
                  Sign Up
                </NavLink>

              </div>
            }

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;