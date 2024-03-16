import { Summary } from './Summary.jsx';
import { useState } from 'react';
import EducationDetails from './EducationDetails.jsx';
import PersonalDetails from './PersonalDetails.jsx';
import ExperienceDetails from './ExperienceDetails.jsx';
import FormButtons from './FormButton.jsx';

export default function MultiStepForm({
  currentStep,
  incrementStep,
  decrementStep,
}) {
  const [personalInputsDetails, setPersonalInputsDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

  //this state hold a boolean that tell us if the form has been clicked
  const [isFormNextButtonClicked, setIsFormNextButtonClicked] = useState(false);

  function handleChangeForFormButtonClicked() {
    setIsFormNextButtonClicked(true);
  }

  //update personal inputs
  function handlePersonalDetailsInputChange(e) {
    //get targeted input name
    let name = e.target.name;
    setPersonalInputsDetails((prevPersonalInputsDetails) => {
      return {
        ...prevPersonalInputsDetails,
        [name]: e.target.value,
      };
    });
  }

  return (
    <form>
      <div className="form_container">
        <PersonalDetails
          handlePersonalDetailsInputChange={handlePersonalDetailsInputChange}
          personalInputsDetails={personalInputsDetails}
          currentStep={currentStep}
          isFormNextButtonClicked={isFormNextButtonClicked}
        />
        <EducationDetails currentStep={currentStep} />
        <ExperienceDetails currentStep={currentStep} />
        <Summary currentStep={currentStep} />
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
