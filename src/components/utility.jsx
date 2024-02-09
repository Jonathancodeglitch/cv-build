import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Button({ name, type = 'button', handleClick = null }) {
  return (
    <button onClick={handleClick} type={type} className="btn">
      {name}
    </button>
  );
}

function FormHeader({ title, desc }) {
  return (
    <div className="form_header">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

function InfoContainer({ name, stateDate, endDate }) {
  const icon = <FontAwesomeIcon icon={faTrash} />;

  return (
    <div className="info_container">
      <div className="info">
        <span className="name">{name}</span>
        <div className="date">
          <span className="state-date">{stateDate} -</span>
          <span className="end-date">{endDate}</span>
        </div>
      </div>
      <span className="trash_icon">{icon}</span>
    </div>
  );
}

/* modal popup */
function Modal({ children, title, handleClick }) {
  const myModal = useRef(null);

  useEffect(() => {
    myModal.current.showModal();
  });

  const cancelButtonIcon = <FontAwesomeIcon icon={faX} />;

  return (
    <dialog ref={myModal} className="modal">
      <div className="modal_header">
        <span className="title">{title}</span>
        <button type="button" onClick={handleClick} className="cancel_btn">
          {cancelButtonIcon}
        </button>
      </div>
      {children}
      <Button handleClick={handleClick} name="Save" />
    </dialog>
  );
}
export { FormHeader, Button, Modal, InfoContainer };
