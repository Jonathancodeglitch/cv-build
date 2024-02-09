import { useState } from 'react';
import { FormHeader, Button, Modal } from './Utility';
import { InfoContainer } from './Utility';

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
  const [modalStatus, setModalStatus] = useState(false);

  function openModal() {
    setModalStatus(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <>
      <FormHeader
        title="Education"
        desc="Please provide your educational background."
      />
      {/*educatonal background infomation */}
      <InfoContainer
        name="university of benin"
        stateDate="1st Jan 2019 -"
        endDate=" 1st Jan 2022"
      />
      <InfoContainer
        name="university of benin"
        stateDate="1st Jan 2019 -"
        endDate=" 1st Jan 2022"
      />
      <InfoContainer
        name="university of benin"
        stateDate="1st Jan 2019 -"
        endDate=" 1st Jan 2022"
      />

      <Button type="button" name="+ Education" handleClick={openModal} />

      {/* modalnpop up */}
      {modalStatus && (
        <Modal title="Add Education" handleClick={closeModal}>
          <EducationalInputs />
        </Modal>
      )}
    </>
  );
}

export { EducationalInfo };
