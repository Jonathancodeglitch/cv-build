import { Button } from './utilities/Utility.jsx';
import { Summary } from './Summary.jsx';
import { useState } from 'react';
import EducationDetails from './EducationDetails.jsx';
import PersonalDetails from './PersonalDetails.jsx';
import ExperienceDetails from './ExperienceDetails.jsx';
import ValidatePersonalDetailsInput from './validatePersonalDetailInput.js';

export default function MultiStepForm({
  currentStep,
  incrementStep,
  decrementStep,
}) {
  //this state hold a boolean that tell us if the form has been clicked
  const [isFormNextButtonClicked, setIsFormNextButtonClicked] = useState(false);
  const [personalInputsDetails, setPersonalInputsDetails] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
  });

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

/* the form buttons that next the form setion and also show the previous form */
function FormButtons({
  incrementStep,
  decrementStep,
  currentStep,
  handleChangeForFormButtonClicked,
  personalInputsDetails,
}) {
  function getNextFormSection() {
    handleChangeForFormButtonClicked();

    //before going to the next section check if the details entered in the personal section is valid
    if (ValidatePersonalDetailsInput(personalInputsDetails)) {
      incrementStep();
    }
  }
  function getPreviousFormSection() {
    decrementStep();
  }

  return (
    <div className="btn_container">
      <div className="container">
        {/* only show previous button  when they are previous section to be shown */}
        {currentStep > 1 && (
          <Button name="previous" handleClick={getPreviousFormSection} />
        )}
        <Button
          name={currentStep == 4 ? 'Comfirm' : 'Next'}
          handleClick={getNextFormSection}
        />
      </div>
    </div>
  );
}
