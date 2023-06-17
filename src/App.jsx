import React, { useState } from 'react';
import Button from './components/Button.jsx';
import Modal from './components/Modal.jsx';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpenModal} isModalOpen={isModalOpen} />
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;
