import { useState } from 'react';
import { FormHeader, Button, Modal } from './Utility';
import { InfoContainer } from './Utility';

function EducationalInputs({ handleEducationInputChange, educationInputs }) {
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
function EducationalInfo({
  step,
  handleEducationInputChange,
  addEducationInputsToEducationArray,
  educationInputs,
  educations,
}) {
  const [modalStatus, setModalStatus] = useState(false);

  function openModal() {
    setModalStatus(true);
  }

  function closeModal() {
    setModalStatus(false);
  }

  /* continue from here genius */
  return (
    <div style={{ display: step == 2 ? 'block' : 'none' }}>
      <FormHeader
        title="Education"
        desc="Please provide your educational background."
      />
      {/*educatonal background infomation */}
      {educations.map((education) => {
        return (
          <InfoContainer
            key={education.id}
            name={education.schoolName}
            stateDate={education.startDate}
            endDate={education.endDate}
          />
        );
      })}

      <Button type="button" name="+ Education" handleClick={openModal} />

      {/* modalnpop up */}
      {modalStatus && (
        <Modal
          title="Add Education"
          closeModal={closeModal}
          addEducationInputsToEducationArray={
            addEducationInputsToEducationArray
          }
        >
          <EducationalInputs
            handleEducationInputChange={handleEducationInputChange}
            educationInputs={educationInputs}
          />
        </Modal>
      )}
    </div>
  );
}

export { EducationalInfo };
