import React, { useState } from 'react';

const Button = ({ onClick, isModalOpen }) => {
  const handleButtonClick = () => {
    if (!isModalOpen) {
      onClick();
    }
  };

  return (
    <>
      {!isModalOpen && <button onClick={handleButtonClick} id='start'>Войти</button>}
    </>
  );
};

export default Button;
