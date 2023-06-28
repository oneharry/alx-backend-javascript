export default function appendToEachArrayValue(array, appendString) {
  let value;
  const arr = [];
  for (value of array) {
    arr.push(appendString + value);
  }

  return arr;
}
