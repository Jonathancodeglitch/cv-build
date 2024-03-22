import { useRef, useState } from 'react';
import PersonalDetails from './PersonalDetails.jsx';
import EducationDetails from './EducationDetails.jsx';
import ExperienceDetails from './ExperienceDetails.jsx';
import { Summary } from './Summary.jsx';
import FormButtons from './FormButton.jsx';
import { v4 as uuidv4 } from 'uuid';

export default function MultiStepForm({
  currentStep,
  incrementStep,
  decrementStep,
}) {
  //this state hold a boolean that tell us if the form has been clicked
  const [isFormNextButtonClicked, setIsFormNextButtonClicked] = useState(false);
 
  function handleChangeForFormButtonClicked() {
    setIsFormNextButtonClicked(true);
  }

  //reset form
  const myForm = useRef(null);

  function resetForm() {
    myForm.current.reset();
  }

  //personal details section
  const [personalInputsDetails, setPersonalInputsDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  //update personal inputs
  function handlePersonalDetailsInputChange(e) {
    let name = e.target.name;
    setPersonalInputsDetails((prevPersonalInputsDetails) => {
      return {
        ...prevPersonalInputsDetails,
        [name]: e.target.value,
      };
    });
  }

  //education details section
  const [educationInputDetail, setEducationInputDetail] = useState({
    institutionName: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    schoolLocation: '',
  });

  // add new educationInputDetail to educationDetails array
  function addEducationInputDetailToStorage() {
    setEducationDetails((prevEducationDetails) => {
      return [
        ...prevEducationDetails,
        { ...educationInputDetail, id: uuidv4() },
      ];
    });
  }

  //holds all education detials
  const [educationDetails, setEducationDetails] = useState([]);

  //update EducationInputDetails
  function handleEducationInputDetailChange(e) {
    let name = e.target.name;
    setEducationInputDetail({
      ...educationInputDetail,
      [name]: e.target.value,
    });
  }

  return (
    <form ref={myForm} className="main_form">
      <div className="form_container">
        <PersonalDetails
          handlePersonalDetailsInputChange={handlePersonalDetailsInputChange}
          personalInputsDetails={personalInputsDetails}
          currentStep={currentStep}
          isFormNextButtonClicked={isFormNextButtonClicked}
        />

        <EducationDetails
          resetForm={resetForm}
          currentStep={currentStep}
          handleEducationInputDetailChange={handleEducationInputDetailChange}
          educationInputDetail={educationInputDetail}
          educationDetails={educationDetails}
          addEducationInputDetailToStorage={addEducationInputDetailToStorage}
        />
        {/*  <ExperienceDetails currentStep={currentStep} /> */}
        {/*  <Summary currentStep={currentStep} /> */}
      </div>
      <FormButtons
        incrementStep={incrementStep}
        decrementStep={decrementStep}
        currentStep={currentStep}
        personalInputsDetails={personalInputsDetails}
        handleChangeForFormButtonClicked={handleChangeForFormButtonClicked}
      />
    </form>
  );
}
