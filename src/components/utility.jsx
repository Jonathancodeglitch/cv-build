import { useRef } from 'react';

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

function Button({ name, type = 'button' }) {
  return (
    <button type={type} className="btn">
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

/* begin from here */
function Modal({ children, buttonName }) {
  const myModal = useRef(null);
  myModal.current.showModal();
  return (
    <dialog ref={myModal} className="modal">
      <div className="modal_content">
        <button autoFocus>Close</button>
        <p>This modal dialog has a groovy backdrop!</p>
      </div>
    </dialog>
  );
}
export { BarStep, FormHeader, Button, FormButtons, Modal };
