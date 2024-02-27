export default function validatePhoneNumber(phoneNumber) {
  //
  let phoneNumberPattern = /^\+?\d+[- ]?\d+[- ]?\d+$/;
  //if phoneNumber is empty ignore because the input field is not required
  if (phoneNumber.trim() === '') {
    return true;
  } else if (phoneNumber.match(phoneNumberPattern)) {
    return true;
  }
  return false;
}
