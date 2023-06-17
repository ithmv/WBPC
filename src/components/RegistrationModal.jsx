import React, { useState } from 'react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log('Выполняется регистрация:', email, password);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content" id='registration'>
        <h2>Регистрация</h2>
        <form onSubmit={handleRegistration}>
          <div id='email'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
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
          <button id='register' type="submit">Зарегистрироваться</button>
        </form>
        <button id='close' onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default RegistrationModal;
