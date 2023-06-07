import './styles.css';

const Modal = ({ isOpen, handleClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal__close-btn" onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;