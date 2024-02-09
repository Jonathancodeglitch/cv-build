import { useState } from 'react';
import { FormHeader, Button, Modal } from './Utility';
import { InfoContainer } from './Utility';

function ExperienceInputs() {
  return (
    <>
      <label>
        Company name
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="Enter the Name of Company" />
      </label>
      <label>
        Position Title
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="Enter Position Title" />
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
      <label>
        Location
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="Enter Company Location" />
      </label>
      <label>
        Description
        <textarea placeholder="Enter job description"></textarea>
      </label>
    </>
  );
}

function ExperienceInfo() {
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
        title="Experience"
        desc="Please provide your work experience."
      />
      {/* experience infomation */}
      <InfoContainer
        name="NetWalkers.ng"
        stateDate="1/20/2023"
        endDate="31/12/2023"
      />
      <InfoContainer
        name="NetWalkers.ng"
        stateDate="1/20/2023"
        endDate="31/12/2023"
      />
      <InfoContainer
        name="NetWalkers.ng"
        stateDate="1/20/2023"
        endDate="31/12/2023"
      />

      <Button type="button" name="+ Experience" handleClick={openModal} />

      {/* modal */}
      {modalStatus && (
        <Modal title="Add Education" handleClick={closeModal}>
          <ExperienceInputs />
        </Modal>
      )}
    </>
  );
}

export { ExperienceInfo };
