import checkIfInputIsEmpty from './utilities/ValidateEmptyInput';
import validateEmail from './utilities/ValidateEmail';
import validatePhoneNumber from './utilities/ValidatePhoneNumber';

export default function ValidatePersonalDetailsInput(personalInputsDetails) {
  let isValid = true;
  if (!checkIfInputIsEmpty(personalInputsDetails.fullName)) {
    isValid = false;
  }
  if (!checkIfInputIsEmpty(personalInputsDetails.email)) {
    isValid = false;
  } else if (!validateEmail(personalInputsDetails.email)) {
    isValid = false;
  }
  if (!validatePhoneNumber(personalInputsDetails.phoneNumber)) {
    isValid = false;
  }

  return isValid;
}
