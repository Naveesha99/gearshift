import React, { useEffect, useState } from 'react';
import { assets } from '../../assets/assets';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, register } from '../../services/authServices'; // Import authService

const Register = () => {
  const location = useLocation();
  const [currentStatus, setCurrentStatus] = useState('signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.status) {
      setCurrentStatus(location.state.status);
    }
  }, [location.state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let response;
      if (currentStatus === 'signup') {
        response = await register({ firstName, lastName, email, password });
      } else {
        response = await login({ email, password });
      }
      if (response.success) {
        // Redirect on successful response
        console.log(response.message);
        navigate('/home');
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        <div className="w-1/2 p-8 bg-gray-500 bg-opacity-15">
          {currentStatus === 'signup' ? (
            <>
              <h2 className="text-3xl font-semibold text-white mb-6">Create an account</h2>
              <p className="text-gray-400 mb-4">
                Already have an account?{' '}
                <span onClick={() => setCurrentStatus('login')} className="text-white hover:underline cursor-pointer">
                  Log in
                </span>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-semibold text-white mb-6">Login your account</h2>
              <p className="text-gray-400 mb-4">
                Don't have an account?{' '}
                <span onClick={() => setCurrentStatus('signup')} className="text-white hover:underline cursor-pointer">
                  Sign up
                </span>
              </p>
            </>
          )}

          <form onSubmit={handleSubmit}>
            {currentStatus === 'signup' && (
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-1/2 p-3 rounded-lg bg-gray-800 text-white"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-1/2 p-3 rounded-lg bg-gray-800 text-white"
                />
              </div>
            )}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-800 text-white"
              />
            </div>
            <button type="submit" className="w-full p-3 bg-white text-black">
              {currentStatus === 'signup' ? 'Create account' : 'Log in'}
            </button>
          </form>
        </div>

        {/* Right Side - Image and Text */}
        <div className="w-1/2 relative">
          <img src={assets.register_bg} alt="Placeholder" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-3xl font-semibold">Capturing Moments, Creating Memories</h1>
            <button
              onClick={() => navigate("/")}
              className="absolute flex justify-between gap-2 right-2 top-2 bg-gray-500 p-2 rounded-full text-white text-sm"
            >
              Back to website <span><img src={assets.arrow} alt="" className='h-[18px]' /></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
