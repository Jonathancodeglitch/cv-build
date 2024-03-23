import { useState } from 'react';
import { FormHeader, Button, InfoContainer } from './utilities/Utility';
import Modal from './utilities/modal';

// education section form
// when user clicks on the add education button show modal form
// when the user enter details and submit
// get user detail
// validate the detail are valid
// if the details are valid display the details in the education section
// send details to the summary section
// else display the appropriate error message (turn on error message when the user start typing)
// user should be able to delete details from section
// user should be able to edit  details

//continue the validation from here when you get back genius
function EducationInputs({ handleEducationInputDetailChange, methods }) {
  return (
    <>
      <label>
        Institution Name
        {methods.formState.errors.institutionName && (
          <span className="error-msg">required</span>
        )}
        <input
          style={
            methods.formState.errors.institutionName && {
              border: '1px solid red',
            }
          }
          {...methods.register('institutionName', { required: true })}
          onChange={handleEducationInputDetailChange}
          name="institutionName"
          type="text"
          placeholder="University Of Benin"
        />
      </label>
      <label>
        Field Of Study
        {methods.formState.errors.fieldOfStudy && (
          <span className="error-msg">required</span>
        )}
        <input
          {...methods.register('fieldOfStudy', { required: true })}
          onChange={handleEducationInputDetailChange}
          name="fieldOfStudy"
          type="text"
          placeholder="e.g Computer science"
        />
      </label>
      <label>
        Start Date
        {methods.formState.errors.startDate && (
          <span className="error-msg">required</span>
        )}
        <input
          {...methods.register('startDate', { required: true })}
          name="startDate"
          type="date"
          onChange={handleEducationInputDetailChange}
        />
      </label>
      <label>
        End Date
        {methods.formState.errors.endDate && (
          <span className="error-msg">required</span>
        )}
        <input
          {...methods.register('endDate', { required: true })}
          name="endDate"
          type="date"
          onChange={handleEducationInputDetailChange}
        />
      </label>
      <label>
        School Location
        {methods.formState.errors.schoolLocation && (
          <span className="error-msg">required</span>
        )}
        <input
          {...methods.register('schoolLocation', { required: true })}
          name="schoolLocation"
          onChange={handleEducationInputDetailChange}
          type="text"
          placeholder="e.g Benin City, Edo State Nigeria"
        />
      </label>
    </>
  );
}

// validate the details to make sure dey are correct. if details are not correct prompt user
//onClick
// get the user details
// if the value entered is legit ?ignore
// else display error for that particuler image that is wrong.

/* this is responsible for displaying the educational background of the user */
export default function EducationDetails({
  currentStep,
  handleEducationInputDetailChange,
  addEducationInputDetailToStorage,
  educationDetails,
}) {
  const [modalStatus, setModalStatus] = useState(false);

  function openModal() {
    setModalStatus(true);
  }

  function changeModalStatus() {
    setModalStatus(false);
  }

  return (
    <div style={{ display: currentStep == 2 ? 'block' : 'none' }}>
      <FormHeader
        title="Education"
        desc="Please provide your educational background."
      />
      {/*educatonal background infomation */}
      {educationDetails.map((educationDetail) => {
        return (
          <InfoContainer
            key={educationDetail.id}
            name={educationDetail.institutionName}
            stateDate={educationDetail.startDate}
            endDate={educationDetail.endDate}
          />
        );
      })}

      <Button type="button" name="+ Education" handleClick={openModal} />

      {/* education modal form pop up*/}
      <Modal
        title="Add Education"
        modalStatus={modalStatus}
        addEducationInputDetailToStorage={addEducationInputDetailToStorage}
        changeModalStatus={changeModalStatus}
      >
        <EducationInputs
          handleEducationInputDetailChange={handleEducationInputDetailChange}
        />
      </Modal>
    </div>
  );
}
