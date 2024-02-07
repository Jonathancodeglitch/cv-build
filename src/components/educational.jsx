import { FormHeader, Button, Modal } from './utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

/* when button is clicked 
    display the modal
    when the modal body/del button is clicked close the modal
*/

function EducationalInputs() {
  return (
    <>
      <label>
        Institution Name
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="Enter the name of your school" />
      </label>
      <label>
        Degree
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="Field Of Study" />
      </label>
      <label>
        Start Date
        <span className="error-msg">This field is required</span>
        <input type="date" placeholder="Enter Start Date" />
      </label>
      <label>
        End Date
        <span className="error-msg">This field is required</span>
        <input type="date" placeholder="Enter End Date" />
      </label>
    </>
  );
}

/* this is responsible for displaying the educational background of the user */
function EducationalInfo() {
  const icon = <FontAwesomeIcon icon={faTrash} />;

  return (
    <>
      <FormHeader
        title="Education"
        desc="Please provide your educational background."
      />
      <div className="educational-info">
        <div className="info_container">
          <div className="info">
            <span className="name">University of Benin</span>
            <div className="date">
              <span className="state-date">1st Jan 2019 -</span>
              <span className="end-date">1st Jan 2022</span>
            </div>
          </div>
          <span className="trash_icon">{icon}</span>
        </div>
        <div className="info_container">
          <div className="info">
            <span className="name">University of Benin</span>
            <div className="date">
              <span className="state-date">1st Jan 2019 -</span>
              <span className="end-date">1st Jan 2022</span>
            </div>
          </div>
          <span className="trash_icon">{icon}</span>
        </div>
        <div className="info_container">
          <div className="info">
            <span className="name">University of Benin</span>
            <div className="date">
              <span className="state-date">1st Jan 2019 -</span>
              <span className="end-date">1st Jan 2022</span>
            </div>
          </div>
          <span className="trash_icon">{icon}</span>
        </div>

        <Button type={Button} name="+ Education" />
      </div>
      {/* modal */}
      <Modal />
    </>
  );
}

export { EducationalInfo };
