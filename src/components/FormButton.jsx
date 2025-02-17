import { Button } from "./utilities/Utility.jsx";
import ValidatePersonalDetailsInput from "./validatePersonalDetailInput.js";

//when the next button is clicked the next form should be displayed
//create a state to hold the cv current step
//pass down the function that increase and decrease the step
//display respective form to steps

export default function FormButtons({
  step,
  handleStepDecrement,
  handleStepIncrement,
}) {
  return (
    <div className="btn_container">
      <div className="container">
        {/* only show previous button  when they are previous section to be shown */}
        {step > 1 && (
          <Button onClick={handleStepDecrement} name="Previous Step" />
        )}

        <Button
          onClick={handleStepIncrement}
          name={step === 4 ? "Comfirm" : "Next Step"}
        />
      </div>
    </div>
  );
}
