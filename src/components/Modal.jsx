import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    console.log('Забыли пароль');
  };

  const handleRegistration = () => {
    console.log('Регистрация');
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
    </div>
  );
};

export default Modal;
