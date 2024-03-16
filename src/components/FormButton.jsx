import { Button } from './utilities/Utility.jsx';
import ValidatePersonalDetailsInput from './validatePersonalDetailInput.js';

/* the form buttons that next the form setion and also show the previous form */
export default function FormButtons({
  incrementStep,
  decrementStep,
  currentStep,
  handleChangeForFormButtonClicked,
  personalInputsDetails,
}) {
  function getNextFormSection() {
    //tell me form button was clickd
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
