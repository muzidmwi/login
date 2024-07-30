import React from 'react';

const UserButton = ({ text, onClick, disabled, ...props }) => {
  return (
    <button onClick={onClick} disabled={disabled} {...props}>
      {text}
    </button>
  );
};

export default UserButton;