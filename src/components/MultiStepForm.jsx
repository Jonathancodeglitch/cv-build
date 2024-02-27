import { Button } from './utilities/Utility.jsx';
import { Summary } from './Summary.jsx';
import { useState, useRef } from 'react';
import EducationDetails from './EducationDetails.jsx';
import PersonalDetails from './PersonalDetails.jsx';
import ExperienceDetails from './ExperienceDetails.jsx';
//import validatePersonalDetailInputs from './ValidatePersonalDetailIInputs.js';

export default function MultiStepForm({
  currentStep,
  incrementStep,
  decrementStep,
}) {
  const myRef = useRef();

  const onClickFunction = () => {
    return myRef.current.ValidatePersonalDetailsInput();
  };

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
  function handleFullNameInputChange(e) {
    setPersonalInputsDetails({
      ...personalInputsDetails,
      fullName: e.target.value,
    });
  }
  function handleEmailInputChange(e) {
    setPersonalInputsDetails({
      ...personalInputsDetails,
      email: e.target.value,
    });
  }
  function handlePhoneNumberInputChange(e) {
    setPersonalInputsDetails({
      ...personalInputsDetails,
      phoneNumber: e.target.value,
    });
  }

  return (
    <form>
      <div className="form_container">
        <PersonalDetails
          ref={myRef}
          handleFullNameInputChange={handleFullNameInputChange}
          handleEmailInputChange={handleEmailInputChange}
          handlePhoneNumberInputChange={handlePhoneNumberInputChange}
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
        onClickFunction={onClickFunction}
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
  onClickFunction,
}) {
  function getNextFormSection() {
    handleChangeForFormButtonClicked();
    //before going to the next section check if the details entered in the personal section is valid
    if (onClickFunction()) {
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
