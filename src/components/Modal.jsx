import React, { useState } from 'react';
import ForgotPasswordModal from './ForgotPasswordModal.jsx';
import RegistrationModal from './RegistrationModal.jsx';

const Modal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Выполняется вход:', username, password);
  };

  const handleForgotPassword = () => {
    setIsForgotPasswordModalOpen(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setIsForgotPasswordModalOpen(false);
  };

  const handleRegistration = () => {
    setIsRegistrationModalOpen(true);
  };

  const handleCloseRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <section id='top'>
          <h1>Web App</h1>
          <button id='close' onClick={onClose}>❌</button>
        </section>

        <h2>Войдите в свой профиль</h2>
        <form onSubmit={handleLogin}>
          <div id='username'>
            <label htmlFor="username">Логин:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div id='password'>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button id='login' type="submit">Войти</button>
        </form>

        <section id='bottom'>
          <button id='bottom' onClick={handleForgotPassword}>Забыли пароль?</button>
          <button id='bottom' onClick={handleRegistration}>Регистрация</button>
        </section>
      </div>

      {isForgotPasswordModalOpen && (
        <ForgotPasswordModal isOpen={isForgotPasswordModalOpen} onClose={handleCloseForgotPasswordModal} />
      )}

      {isRegistrationModalOpen && (
        <RegistrationModal isOpen={isRegistrationModalOpen} onClose={handleCloseRegistrationModal} />
      )}
    </div>
  );
};

export default Modal;
