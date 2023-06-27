export default function appendToEachArrayValue(array, appendString) {
  let idx;
  let value;
  const newArr = [...array];
  for (idx in array) {
    if (idx) {
      value = array[idx];
      newArr[idx] = appendString + value;
    }
  }

  return newArr;
}
