import React from 'react';

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  const handleForgotPassword = () => {
    console.log('Запрос на восстановление пароля');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" id='forgot'>
        <h2>Восстановление пароля</h2>
        {/* Дополнительная логика и разметка для восстановления пароля */}
        <button id='close' onClick={onClose}>❌</button>
        <button onClick={handleForgotPassword}>Восстановить пароль</button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
