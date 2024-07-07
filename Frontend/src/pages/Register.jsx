import React, { useState } from 'react';
import api from '../services/api';

function Register() {
  
  const [username, setUsername] = useState('Pratap');
  const [password, setPassword] = useState('12345678');

  const handleRegister = async () => {
    try {
      const response = await api.post('/api/users/register', { username, password });
      console.log(response);
      alert(response);
    } catch (error) {
      console.error('Register error:', error);
      alert(error);
    }
  };
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col max-w-md px-4 py-8 bg-white shadow-md sm:px-6 md:px-8 lg:px-10 rounded-3xl w-50">
        <div className="self-center text-xl font-medium text-gray-800 sm:text-3xl">
          Make account
        </div>
        <div className="self-center mt-4 text-xl text-gray-800 sm:text-md">
          Register
        </div>

        <div className="mt-10">
          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-1 text-xs tracking-wide text-gray-600">
              Username: 
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                <i className="text-blue-500 fas fa-at"></i>
              </div>
              <input
                id="email"
                type="text"
                name="email"
                className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-400"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="password" className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm">
              Password:
            </label>
            <div className="relative">
              <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                <span>
                  <i className="text-blue-500 fas fa-lock"></i>
                </span>
              </div>
              <input
                id="password"
                type="password"
                name="password"
                className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-2xl focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="flex items-center justify-center w-full py-2 mt-2 text-sm text-white transition duration-150 ease-in bg-blue-500 focus:outline-none sm:text-base hover:bg-blue-600 rounded-2xl"
              onClick={handleRegister}
            >
              <span className="mr-2 uppercase">Register Now</span>
              <span>
                <svg className="w-6 h-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6">
        <a href="#" target="_blank" className="inline-flex items-center text-xs font-medium text-center text-gray-700">
          <span className="ml-2">
            Already have an account
            <a href="/login" className="ml-2 text-xs font-semibold text-blue-500">
              Login now
            </a>
          </span>
        </a>
      </div>
    </div>
  )
}

export default Register;
