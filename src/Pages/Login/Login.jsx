import { useState } from 'react';
import { NavLink } from 'react-router';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/lotties/login-lottie.json'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Login submitted:', formData);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Animation Side - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-blue-600 p-8 items-center justify-center">
          <div className="w-full max-w-md">
            <Lottie 
              animationData={loginLottie} 
              loop={true}
              className="w-full h-auto"
            />
            <div className="mt-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">Welcome Back!</h3>
              <p className="opacity-90">Thousands of jobs waiting for qualified candidates like you</p>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Sign In to Your Account
            </h2>
            <p className="mt-2 text-gray-600">
              Enter your credentials to access your dashboard
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className={`relative transition-all duration-200 ${focusedField === 'email' ? 'ring-2 ring-indigo-500 rounded-lg' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className={`h-5 w-5 ${focusedField === 'email' ? 'text-indigo-600' : 'text-gray-400'} transition-colors`} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`py-3 pl-10 pr-4 block w-full border ${errors.email ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none transition duration-200`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className={`relative transition-all duration-200 ${focusedField === 'password' ? 'ring-2 ring-indigo-500 rounded-lg' : ''}`}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className={`h-5 w-5 ${focusedField === 'password' ? 'text-indigo-600' : 'text-gray-400'} transition-colors`} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`py-3 pl-10 pr-10 block w-full border ${errors.password ? 'border-red-300' : 'border-gray-300'} rounded-lg focus:outline-none transition duration-200`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FiEyeOff className={`h-5 w-5 ${focusedField === 'password' ? 'text-indigo-600' : 'text-gray-400'} hover:text-gray-500 transition-colors`} />
                  ) : (
                    <FiEye className={`h-5 w-5 ${focusedField === 'password' ? 'text-indigo-600' : 'text-gray-400'} hover:text-gray-500 transition-colors`} />
                  )}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Remember & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <NavLink to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </NavLink>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ${isSubmitting ? 'opacity-80' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <FiArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Don't have an account?{' '}
                  <NavLink 
                    to="/register" 
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign up
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;