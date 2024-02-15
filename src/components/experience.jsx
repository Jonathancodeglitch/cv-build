import { useState } from 'react';
import { FormHeader, Button, Modal } from './Utility';
import { InfoContainer } from './Utility';

function ExperienceInputs() {
  return (
    <>
      <label>
        Company Name
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="Enter Company Name" />
      </label>
      <label>
        Job Title
        <span className="error-msg">This field is required</span>
        <input type="text" placeholder="enter Job Title" />
      </label>
      <label>
        Start Date
        <span className="error-msg">This field is required</span>
        <input type="date" />
      </label>
      <label>
        End Date
        <span className="error-msg">This field is required</span>
        <input type="date" />
      </label>
      <label>
        Company Location
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

function ExperienceInfo({ step }) {
  const [modalStatus, setModalStatus] = useState(false);

  function openModal() {
    setModalStatus(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <div style={{ display: step == 3 ? 'block' : 'none' }}>
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
        <Modal title="Add Experience" handleClick={closeModal}>
          <ExperienceInputs />
        </Modal>
      )}
    </div>
  );
}

export { ExperienceInfo };
