import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

//change this name
function InfoContainer({ name, stateDate, endDate }) {
  const icon = <FontAwesomeIcon icon={faTrash} />;

  return (
    <div className="info_container">
      <div className="info">
        <span className="name">{name}</span>
        <div className="date">
          <span className="state-date">{stateDate}/</span>
          <span className="end-date">{endDate}</span>
        </div>
      </div>
      <span className="trash_icon">{icon}</span>
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
    inputAttributes['required'] = 'required';
  }

  return (
    <label>
      {title}
      <span className="error-msg">This field is required</span>
      <input {...inputAttributes} />
    </label>
  );
}


export { FormHeader, Button, InfoContainer, Input };
