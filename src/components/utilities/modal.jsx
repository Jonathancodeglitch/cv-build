import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Button } from './Utility';
import { useForm } from 'react-hook-form';
import React from 'react';

export default function Modal({
  children,
  title,
  modalStatus,
  changeModalStatus,
  addEducationInputDetailToStorage,
}) {
  useEffect(() => {
    modalStatus && myModal.current.showModal();
  });

  function closeModal() {
    changeModalStatus();
    myModal.current.close();
  }

  //react hook form methods
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //pass react hook form methods to the children props  by cloning and adding the props

  const formInputs = React.cloneElement(children, {
    methods: { register, formState: { errors } },
  });

  // when form is submitted
  const onSubmit = () => {
    addEducationInputDetailToStorage();
    closeModal();
  };

  const myModal = useRef(null);
  const cancelButtonIcon = <FontAwesomeIcon icon={faX} />;

  return (
    <dialog ref={myModal} className="modal">
      <div className="modal_header">
        <span className="title">{title}</span>
        <button type="button" className="cancel_btn" onClick={closeModal}>
          {cancelButtonIcon}
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs}
        <Button name="Save" type="submit" />
      </form>
    </dialog>
  );
}
