import React, { useState } from 'react';
import { Link } from 'react-router';
import Banner from '../components/Banner';

const Login = () => {

    const [warning, setWarning] = useState('');

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-cyan-50">
      <Banner text="Login to your account" />
      <fieldset className="fieldset bg-primary text-primary-content border-base-300 rounded-box w-xs border p-4 h-full max-w-md mt-8">

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        {warning && <p className="text-warning text-sm">{warning}</p>}

        <p className='text-base'>Don't have an account? Register <Link to='/register' className='text-warning'>here.</Link></p>

        <button className="btn btn-secondary mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
