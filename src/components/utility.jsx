import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function BarStep({ step, title, active }) {
  return (
    <div className="progress_bar">
      <span className={active ? 'bar active' : 'bar'}>{step}</span>
      <div className="progress_bar_text">
        <div className="step">step {step}</div>
        <div className="progress_bar_title">{title}</div>
      </div>
    </div>
  );
}

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

function FormButtons() {
  return (
    <div className="btn_container">
      <div className="container">
        <Button name="previous" />
        <Button name="Next" type="submit" />
      </div>
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
export { BarStep, FormHeader, Button, FormButtons, Modal };
