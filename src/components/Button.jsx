import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} data-testid="custom-button">
      {text}
    </button>
  );
};

export default Button;