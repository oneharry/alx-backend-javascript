export default function appendToEachArrayValue(array, appendString) {
  let value;
  for (value of array) {
    value = appendString + value;
  }

  return array;
}
