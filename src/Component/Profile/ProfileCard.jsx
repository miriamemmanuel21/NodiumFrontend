import React from 'react';

const ProfileCard = ({ name, role, email, avatar }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-xs mx-auto">
      <img src={avatar} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h2 className="text-lg font-bold text-center">{name}</h2>
      <p className="text-gray-600 text-center">{role}</p>
      <p className="text-gray-500 text-center mt-2">{email}</p>
    </div>
  );
};

export default ProfileCard;
