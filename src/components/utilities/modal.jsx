import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Utility";
import { useForm } from "react-hook-form";
import React from "react";

export default function Modal({
  children,
  title,
  description,
  modalRef,
  handleCloseModal,
  onSubmit,
}) {
  const cancelButtonIcon = <FontAwesomeIcon icon={faX} />;

  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal_header">
        <div className="modal_header_content">
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </div>
        <button onClick={handleCloseModal} type="button" className="cancel_btn">
          {cancelButtonIcon}
        </button>
      </div>
      {/* modal content */}
      {children}
    </dialog>
  );
}
