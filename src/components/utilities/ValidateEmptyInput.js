export default function checkIfInputIsEmpty(input) {
  if (input.trim() !== '') {
    return true;
  }
  return false;
}
