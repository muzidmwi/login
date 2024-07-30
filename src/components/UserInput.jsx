import React from 'react';

const UserInput = ({ type, placeholder, value, name, onChange }) => {
  return (
    <input
      className="w-full outline-none text-[#828282] text-base font-normal  leading-normal bg-white rounded-lg border border-[#e0e0e0] flex items-center px-2 py-3"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}

    />
  );
};

export default UserInput;