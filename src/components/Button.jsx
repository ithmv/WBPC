import React, { useState, useEffect } from 'react';
import Modal from './Modal.jsx';

const Button = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      onClick();
    }
  }, [isModalOpen, onClick]);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {!isModalOpen && <button onClick={handleButtonClick}>Войти</button>}
      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </>
  );
};

export default Button;
