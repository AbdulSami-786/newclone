import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/Firebase'; // ✅ Correct import
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => setShowPassword((prev) => !prev);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!email || !password) {
      setMsg('Please fill all fields');
      setIsLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg('Signup successful!');
      setEmail('');
      setPassword('');
      // navigate("/login"); // Uncomment this if you want to redirect after signup
    } catch (error) {
      setMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full max-w-6xl gap-10">

        {/* Text Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-primary">Create Your Account 👋</h1>
          <p className="text-base text-base-content/80">
            Sign up to explore amazing products and features.
          </p>
          <div className="hidden lg:block">
            <img
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?semt=ais_hybrid&w=740"
              alt="Signup Illustration"
              className="max-w-xs"
            />
          </div>
        </div>

        {/* Signup Card */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 rounded-2xl">
          <div className="card-body space-y-4">
            <h2 className="text-2xl font-semibold text-center">Sign up</h2>

            {msg && <p className="text-sm text-center text-error">{msg}</p>}

            <form onSubmit={submitHandler} className="space-y-4">
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label flex justify-between">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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

              {/* Submit Button */}
              <div className="form-control mt-4">
                <button
                  type="submit"
                  className="btn btn-neutral w-full"
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing up...' : 'Sign up'}
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-base-content/60">
              Already have an account?
              <a href="#" className="ml-1 link link-primary">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
