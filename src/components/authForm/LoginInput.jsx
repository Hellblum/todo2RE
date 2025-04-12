import React from 'react';

const LoginInput = () => {
  return (
    <div>
      <label className='login-label' htmlFor="username">Login</label>
      <input 
      name='username' 
      className='login-input' 
      type="text" 
      id="username" 
      placeholder="username" 
      />
    </div>
  );
};

export default LoginInput;