import MultiStepForm from './MultiStepForm';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

/* check if the values entered into the values are valid else display error
8. if the values are okay save the values, hide the current section of the form and show the next section
9. update the sideBar to outline the current step
10. add a summary section that displays the saved values the user have inputted from the previous (eduction,personal experience ) sections each category should have an edit button
11.when the previous button is clicked show the previous form section
12. diplay the user input on a cv template which should have download btn when the comfirm button on summary section is clicked
13. when download is clicked the user should be able to download the template in pdf or word format. */




export default function CvBuilder() {
  const [currentStep, setCurrentStep] = useState(1);

  function incrementStep() {
    const noOfAvaliableSteps = 4;
    if (currentStep < noOfAvaliableSteps) {
      setCurrentStep(currentStep + 1);
    }
  }

  function decrementStep() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className="multistep_form">
      <ProgressBar currentStep={currentStep} />
      <MultiStepForm
        currentStep={currentStep}
        incrementStep={incrementStep}
        decrementStep={decrementStep}
      />
    </div>
  );
}
