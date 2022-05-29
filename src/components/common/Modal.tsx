import React, { useEffect } from 'react';
import Modal from 'react-modal';
import TodoListForm from "../TodoListForm/TodoListForm";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '600px'
  },
};
interface AllProps {
    isModalOpen: boolean;
}

const ModalPopup: React.FC<AllProps> = ({
    isModalOpen,
  }) => {  
  
  const [modalIsOpen, setIsOpen] = React.useState(isModalOpen);

  function closeModal() {
    setIsOpen(false);
    
  }

  useEffect(() => {
    setIsOpen(isModalOpen);
}, [isModalOpen])


  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">

        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <TodoListForm />

      </Modal>
  );
}

export default ModalPopup;