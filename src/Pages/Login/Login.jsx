import { use, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import Lottie from 'lottie-react';
import loginLottie from '../../assets/lotties/login-lottie.json'
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

  const { loginUser, googleLogin } = use(AuthContext)

  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state || '/';

  // email password login
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    loginUser(email, password)
      .then(res => {
        console.log(res.user);
        navigate(from)
      })
      .catch(error => {
        console.log(error.message);
      })
  }

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
    .then(res => {
      console.log(res.user);
      navigate(from)
    })
    .catch(err => {
      console.log(err.message);
    })
  }



  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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

          <form onSubmit={handleLogin} className="space-y-6" >
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
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`py-3 pl-10 pr-4 block w-full border border-gray-300 rounded-lg focus:outline-none transition duration-200`}
                  placeholder="you@example.com"
                />
              </div>

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
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className={`py-3 pl-10 pr-10 block w-full border  border-gray-300 rounded-lg focus:outline-none transition duration-200`}
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
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 opacity-80`}
              >
                Login
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

            {/*  signup with google button  */}
            <button onClick={handleGoogleLogin} className='flex items-center gap-2 justify-center border w-full mx-auto py-2 border-gray-500 rounded-lg mt-10 cursor-pointer hover:rounded-2xl transition-all text-lg font-bold hover:bg-indigo-50'>
              <FcGoogle size={25}></FcGoogle>
              <p>Sign Up with google</p>
            </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;