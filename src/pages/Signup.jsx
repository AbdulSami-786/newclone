import React, { useState } from 'react';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center px-4 mtt">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-6xl gap-10">
        
        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-primary">Welcome Back 👋</h1>
          <p className="text-base text-base-content/80">
            Access your account to continue exploring amazing products and features.
            Enter your credentials below to log in.
          </p>
          <div className="hidden lg:block">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740"
              alt="Login Illustration"
              className="max-w-xs"
            />
          </div>
        </div>

        {/* Login Card */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 rounded-2xl">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold text-center">Login to your account</h2>
            
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered w-full"
              />
            </div>

            {/* Password with Show/Hide */}
            <div className="form-control">
              <label className="label flex justify-between">
                <span className="label-text">Password</span>
                <a href="#" className="label-text-alt link link-hover">Forgot?</a>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-12"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute right-3 top-2/4 -translate-y-1/2 text-sm text-primary hover:underline"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="form-control mt-4">
              <button className="btn btn-neutral w-full">Login</button>
            </div>

            <p className="text-center text-sm text-base-content/60">
              Don't have an account?
              <a href="#" className="ml-1 link link-primary">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
