import MultiStepForm from './MultiStepForm';
import ProgressBar from './ProgressBar';
import { useState } from 'react';



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
