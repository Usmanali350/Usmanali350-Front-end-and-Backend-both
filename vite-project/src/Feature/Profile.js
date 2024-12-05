import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { email, password } = useSelector((state) => state.Storage);

  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Profile;
