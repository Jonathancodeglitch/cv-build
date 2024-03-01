import { FormHeader } from './utilities/Utility';
import { useState, useRef, useEffect } from 'react';
import checkIfInputIsEmpty from './utilities/ValidateEmptyInput';
import validateEmail from './utilities/ValidateEmail';
import validatePhoneNumber from './utilities/ValidatePhoneNumber';

//when next button is clicked
// check if the correct values was entered
// if not display an error to the respective input that was wrongly field
// then start validating on inputChange when the user clicks the input
// details correct >>>>> else move on
/* 

 */

export default function PersonalDetails({
  currentStep,
  personalInputsDetails,
  handlePersonalDetailsInputChange,
  isFormNextButtonClicked,
}) {
  const [fullNameErrorMsg, setFullNameErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [phoneNumberErrorMsg, setPhoneNumberErrorMsg] = useState('');
  const fullNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);

  // validate the personal details inputs and display error
  useEffect(() => {
    /*  check if form btn has been clicked so the input dont start
     validating before the user interacts with the form */
    if (isFormNextButtonClicked) {
      //validate for empty value
      if (!checkIfInputIsEmpty(personalInputsDetails.fullName)) {
        setFullNameErrorMsg('This field is required');
        fullNameInputRef.current.style.borderColor = 'var( --Strawberry-red)';
      } else {
        setFullNameErrorMsg('');
        fullNameInputRef.current.style.borderColor = '';
      }
      //validate for wrong email format
      if (!checkIfInputIsEmpty(personalInputsDetails.email)) {
        setEmailErrorMsg('This field is required');
        emailInputRef.current.style.borderColor = 'var( --Strawberry-red)';
      } else if (!validateEmail(personalInputsDetails.email)) {
        setEmailErrorMsg('Invalid Email Format');
        emailInputRef.current.style.borderColor = 'var( --Strawberry-red)';
      } else {
        setEmailErrorMsg('');
        emailInputRef.current.style.borderColor = '';
      }
      //validate for wrong email format
      if (!validatePhoneNumber(personalInputsDetails.phoneNumber)) {
        setPhoneNumberErrorMsg('Invalid PhoneNumber');
        phoneNumberInputRef.current.style.borderColor =
          'var( --Strawberry-red)';
      } else {
        setPhoneNumberErrorMsg('');
        phoneNumberInputRef.current.style.borderColor = '';
      }
    }
    //when the  (isFormNextButtonClicked, personalInputsDetails) changes validae the form
  }, [isFormNextButtonClicked, personalInputsDetails]);

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
            name="fullName"
            ref={fullNameInputRef}
            onChange={(e) => {
              //check if the next button has been clicked before you start validation on input change
              //isFormNextButtonClicked && ValidatePersonalDetailsInput();
              handlePersonalDetailsInputChange(e);
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
            name="email"
            ref={emailInputRef}
            onChange={(e) => {
              handlePersonalDetailsInputChange(e);

              //isFormNextButtonClicked && ValidatePersonalDetailsInput();
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
            name="phoneNumber"
            ref={phoneNumberInputRef}
            onChange={(e) => {
              handlePersonalDetailsInputChange(e);
              //isFormNextButtonClicked && ValidatePersonalDetailsInput();
            }}
            value={personalInputsDetails.phoneNumber}
            type="tel"
            placeholder="e.g +234 9012354678"
          />
        </label>
      </div>
    </div>
  );
}
