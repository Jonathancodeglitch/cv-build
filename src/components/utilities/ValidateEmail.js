export default function validateEmail(email) {
  var emailPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

  if (email.toLowerCase().match(emailPattern)) {
    return true;
  }
  return false;
}
