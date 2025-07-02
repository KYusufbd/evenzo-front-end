import React, { useState } from 'react';
import { Link } from 'react-router';
import Banner from '../components/Banner';

const Register = () => {
  const [warning, setWarning] = useState('');

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-cyan-50">
      <Banner text="Create an account" />
      <fieldset className="fieldset bg-primary text-primary-content border-base-300 rounded-box w-xs border p-4 h-full max-w-md mt-8">
        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        {warning && <p className="text-warning text-sm">{warning}</p>}

        <p className="text-base">
          Already have an account? Log in{' '}
          <Link to="/login" className="text-warning">
            here.
          </Link>
        </p>

        <button className="btn btn-secondary mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default Register;
