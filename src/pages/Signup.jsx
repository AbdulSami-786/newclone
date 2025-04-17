import React from 'react'

function Signup() {
  return (
    <div className="hero bg-base-200 min-h-screen mt-[60px] z-[-100]">
  <div className="hero-content flex-col lg:flex-row-reverse w-[100vh]z-[-100]">
    <div className="text-center lg:text-left w-[60vh] z-[-100]">
      <h1 className="text-3xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl z-[-100]">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  )
}

export default Signup