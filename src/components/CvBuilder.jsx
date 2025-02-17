import { useState } from "react";
import MultiStepForm from "./MultiStepForm";
import ProgressBar from "./ProgressBar";

export default function CvBuilder() {
  //State for the current form step
  const [step, setStep] = useState(1);

  function handleStepIncrement() {
    if (step < 4) {
      setStep(step + 1);
    }
  }

  function handleStepDecrement() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  return (
    <div className="multistep_form">
      <ProgressBar step={step} />
      <MultiStepForm
        handleStepIncrement={handleStepIncrement}
        handleStepDecrement={handleStepDecrement}
        step={step}
      />
    </div>
  );
}
