import { useState } from 'react';
import { FormHeader, Button, Modal } from './utilities/Utility';
import { InfoContainer } from './utilities/Utility';

function EducationInputs({ handleEducationInputChange, educationInputs }) {
  return (
    <>
      <label>
        Institution Name
        <span className="error-msg">This field is required</span>
        <input
          onChange={(e) => handleEducationInputChange(e, 'schoolName')}
          value={educationInputs.schoolName}
          type="text"
          placeholder="University Of Benin"
        />
      </label>
      <label>
        Field Of Study
        <span className="error-msg">This field is required</span>
        <input
          onChange={(e) => handleEducationInputChange(e, 'degree')}
          value={educationInputs.degree}
          type="text"
          placeholder="e.g Computer science"
        />
      </label>
      <label>
        Start Date
        <span className="error-msg">This field is required</span>
        <input
          onChange={(e) => handleEducationInputChange(e, 'startDate')}
          value={educationInputs.startDate}
          type="date"
        />
      </label>
      <label>
        End Date
        <span className="error-msg">This field is required</span>
        <input
          onChange={(e) => handleEducationInputChange(e, 'endDate')}
          value={educationInputs.endDate}
          type="date"
        />
      </label>
      <label>
        School Location
        <span className="error-msg">This field is required</span>
        <input
          onChange={(e) => handleEducationInputChange(e, 'location')}
          value={educationInputs.location}
          type="text"
          placeholder="e.g Benin City, Edo State Nigeria"
        />
      </label>
    </>
  );
}

/* this is responsible for displaying the educational background of the user */
export default function EducationDetails({ currentStep }) {
  const [modalStatus, setModalStatus] = useState(false);

  function openModal() {
    setModalStatus(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  return (
    <div style={{ display: currentStep == 2 ? 'block' : 'none' }}>
      <FormHeader
        title="Education"
        desc="Please provide your educational background."
      />
      {/*educatonal background infomation */}
      <InfoContainer name="uniben" stateDate="1/20/2002" endDate="1/20/2002" />
      <Button type="button" name="+ Education" handleClick={openModal} />

      {/* modal pop up */}
      {modalStatus && (
        <Modal title="Add Education" closeModal={closeModal}>
          <EducationInputs />
        </Modal>
      )}
    </div>
  );
}
