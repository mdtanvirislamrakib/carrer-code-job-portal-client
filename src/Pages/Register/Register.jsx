import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiPhone, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { NavLink } from 'react-router';
import registerLottie from '../../assets/lotties/register-lottie.json';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phone: '',
        terms: false
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 flex items-center justify-center p-4">
            <div className="max-w-6xl w-full flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Lottie Animation Side */}
                <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-blue-600 p-8 items-center justify-center">
                    <div className="w-full max-w-md">
                        <Lottie 
                            animationData={registerLottie} 
                            loop={true}
                            className="w-full h-auto"
                        />
                        <div className="mt-8 text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
                            <p className="opacity-90">Thousands of professionals are finding their dream jobs through our platform</p>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-1 p-8 sm:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-extrabold text-gray-900">
                            Create Your Account
                        </h2>
                        <p className="mt-2 text-gray-600">
                            Start your journey to finding the perfect career match
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <div className="space-y-1">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <div className={`relative transition-all duration-200 ${focusedField === 'fullName' ? 'ring-2 ring-indigo-500 rounded-lg' : ''}`}>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiUser className={`h-5 w-5 ${focusedField === 'fullName' ? 'text-indigo-600' : 'text-gray-400'} transition-colors`} />
                                </div>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('fullName')}
                                    onBlur={() => setFocusedField(null)}
                                    className="py-3 pl-10 pr-4 block w-full border border-gray-300 rounded-lg focus:outline-none transition duration-200"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
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
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('email')}
                                    onBlur={() => setFocusedField(null)}
                                    className="py-3 pl-10 pr-4 block w-full border border-gray-300 rounded-lg focus:outline-none transition duration-200"
                                    placeholder="you@example.com"
                                />
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number (Optional)
                            </label>
                            <div className={`relative transition-all duration-200 ${focusedField === 'phone' ? 'ring-2 ring-indigo-500 rounded-lg' : ''}`}>
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiPhone className={`h-5 w-5 ${focusedField === 'phone' ? 'text-indigo-600' : 'text-gray-400'} transition-colors`} />
                                </div>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('phone')}
                                    onBlur={() => setFocusedField(null)}
                                    className="py-3 pl-10 pr-4 block w-full border border-gray-300 rounded-lg focus:outline-none transition duration-200"
                                    placeholder="+1 (555) 123-4567"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
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
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField('password')}
                                    onBlur={() => setFocusedField(null)}
                                    className="py-3 pl-10 pr-10 block w-full border border-gray-300 rounded-lg focus:outline-none transition duration-200"
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
                            <div className="flex items-center mt-2">
                                <div className={`h-1 flex-1 rounded-full ${formData.password.length > 0 ? (formData.password.length < 4 ? 'bg-red-400' : formData.password.length < 8 ? 'bg-yellow-400' : 'bg-green-500') : 'bg-gray-200'}`}></div>
                                <div className={`h-1 flex-1 rounded-full mx-1 ${formData.password.length > 3 ? (formData.password.length < 8 ? 'bg-yellow-400' : 'bg-green-500') : 'bg-gray-200'}`}></div>
                                <div className={`h-1 flex-1 rounded-full ${formData.password.length > 7 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                                <span className="ml-3 text-xs text-gray-500">
                                    {formData.password.length > 0 ? (
                                        formData.password.length < 4 ? 'Weak' : 
                                        formData.password.length < 8 ? 'Medium' : 'Strong'
                                    ) : ''}
                                </span>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    name="terms"
                                    type="checkbox"
                                    required
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="font-medium text-gray-700">
                                    I agree to the{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                        Privacy Policy
                                    </a>
                                </label>
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
                                        Creating Account...
                                    </>
                                ) : (
                                    <>
                                        Get Started
                                        <FiArrowRight className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Already have an account?{' '}
                                    <NavLink 
                                        to="/login" 
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
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

export default Register;