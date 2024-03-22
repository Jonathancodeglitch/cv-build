import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Utility';

export default function Modal({
  children,
  title,
  modalStatus,
  changeModalStatus,
  addEducationInputDetailToStorage,
  resetForm,
}) {
  const myModal = useRef(null);
  const cancelButtonIcon = <FontAwesomeIcon icon={faX} />;

  useEffect(() => {
    modalStatus && myModal.current.showModal();
  });

  function closeModal() {
    changeModalStatus();
    myModal.current.close();
    resetForm();
  }

  return (
    <dialog ref={myModal} className="modal">
      <div className="modal_header">
        <span className="title">{title}</span>
        <button type="button" className="cancel_btn" onClick={closeModal}>
          {cancelButtonIcon}
        </button>
      </div>
      {children}

      <Button
        name="Save"
        handleClick={() => {
          addEducationInputDetailToStorage();
          closeModal();
        }}
      />
    </dialog>
  );
}
