import React from 'react';

const PasswordInput = () => {
  return (
    <div>
      <label className='password-label' htmlFor="password">Password</label>
      <input 
      name='password' 
      className='password-input' 
      type="password" 
      id="password" 
      placeholder="password" 
      />
    </div>
  );
};

export default PasswordInput;