import { FormHeader } from './utilities/Utility';
import { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import checkIfInputIsEmpty from './utilities/ValidateEmptyInput';
import validateEmail from './utilities/ValidateEmail';
import validatePhoneNumber from './utilities/ValidatePhoneNumber';

//when next button is clicked
// check if the correct values was entered
// if not display an error to the respective input that was wrongly field
// then start validating on inputChange when the user clicks the input
// details correct >>>>> else move on

/* personal details */
export default forwardRef(function PersonalDetails(
  {
    currentStep,
    personalInputsDetails,
    handleFullNameInputChange,
    handleEmailInputChange,
    handlePhoneNumberInputChange,
    isFormNextButtonClicked,
  },
  ref
) {
  const [fullNameErrorMsg, setFullNameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState('');
  const fullNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);

  // validate the personal details inputs and display error
  function ValidatePersonalDetailsInput() {
    let isValid = true;
    if (!checkIfInputIsEmpty(personalInputsDetails.fullName)) {
      isValid = false;
      setFullNameErrorMsg('This field is required');
      fullNameInputRef.current.style.borderColor = 'var( --Strawberry-red)';
    } else {
      setFullNameErrorMsg('');
      fullNameInputRef.current.style.borderColor = '';
    }
    if (!checkIfInputIsEmpty(personalInputsDetails.email)) {
      isValid = false;
      setEmailErrorMsg('This field is required');
      emailInputRef.current.style.borderColor = 'var( --Strawberry-red)';
    } else if (!validateEmail(personalInputsDetails.email)) {
      isValid = false;
      setEmailErrorMsg('Invalid Email Format');
      emailInputRef.current.style.borderColor = 'var( --Strawberry-red)';
    } else {
      setEmailErrorMsg('');
      emailInputRef.current.style.borderColor = '';
    }
    if (!validatePhoneNumber(personalInputsDetails.phoneNumber)) {
      isValid = false;
      setPhoneNumberErrorMsg('Enter a valid PhoneNumber');
      phoneNumberInputRef.current.style.borderColor = 'var( --Strawberry-red)';
    } else {
      setPhoneNumberErrorMsg('');
      phoneNumberInputRef.current.style.borderColor = '';
    }

    return isValid;
  }

  /* 
  expose the ValidatePersonalDetailsInput() function to the parent 
  function so the nextButton can validate inputs on click */

  useImperativeHandle(ref, () => ({
    ValidatePersonalDetailsInput,
  }));

  return (
    <div style={{ display: currentStep == 1 ? 'block' : 'none' }}>
      <FormHeader
        title="Personal info"
        desc="Please provide your name, email address, and phone number."
      />
      <div className="personal_info_inputs">
        <label>
          Full Name
          <span className="error-msg">{fullNameErrorMsg}</span>
          <input
            ref={fullNameInputRef}
            onChange={(e) => {
              handleFullNameInputChange(e);
              //check if the next button has been clicked before you start validation on input change
              isFormNextButtonClicked && ValidatePersonalDetailsInput();
            }}
            value={personalInputsDetails.fullName}
            type="text"
            placeholder="e.g Jonathan kendrick"
          />
        </label>
        <label>
          Email Address
          <span className="error-msg">{emailErrorMsg}</span>
          <input
            ref={emailInputRef}
            onChange={(e) => {
              handleEmailInputChange(e);
              isFormNextButtonClicked && ValidatePersonalDetailsInput();
            }}
            value={personalInputsDetails.email}
            type="email"
            placeholder="e.g codeGlitch@gamil.com"
          />
        </label>
        <label>
          Phone Number
          <span className="error-msg">{phoneNumberErrorMsg}</span>
          <input
            ref={phoneNumberInputRef}
            onChange={(e) => {
              handlePhoneNumberInputChange(e);
              isFormNextButtonClicked && ValidatePersonalDetailsInput();
            }}
            value={personalInputsDetails.phoneNumber}
            type="tel"
            placeholder="e.g +234 9012354678"
          />
        </label>
      </div>
    </div>
  );
});
