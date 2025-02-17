import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";

function Button({ name, type = "button", onClick = null }) {
  return (
    <button onClick={onClick} type={type} className="btn">
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

function Input({
  title,
  type,
  handleInputChange,
  value,
  placeholder,
  required,
}) {
  const inputAttributes = {
    placeholder,
    value,
    type,
    onClick: handleInputChange,
  };

  //check if input is required and add as attribute to the input
  if (required) {
    inputAttributes["required"] = "required";
  }

  return (
    <label>
      {title}
      <span className="error-msg">This field is required</span>
      <input {...inputAttributes} />
    </label>
  );
}

function Item({
  children,
  handleEditButtonClick,
  handleDeleteButtonClick,
  id,
}) {
  const deleteIcon = <FontAwesomeIcon icon={faTrash} />;
  const editIcon = <FontAwesomeIcon icon={faPen} />;

  return (
    <li className="item_container">
      <div className="item">{children}</div>
      {/* icons */}
      <div className="icon">
        <span
          onClick={() => {
            handleEditButtonClick(id);
          }}
          className="trash_icon"
        >
          {editIcon}
        </span>
        <span
          onClick={() => {
            handleDeleteButtonClick(id);
          }}
          className="trash_icon"
        >
          {deleteIcon}
        </span>
      </div>
    </li>
  );
}
export { FormHeader, Button, Input, Item };
