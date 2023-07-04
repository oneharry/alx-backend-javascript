// export default function cleanSet(set, startStrring) {
//   const arr = [...set];
//   if (!startStrring) {
//     return '';
//   }
//   const str = arr.filter((el) => (el.startsWith(startStrring)))
//     .map((el) => el.slice(startStrring.length));
//   return str.join('-');
// }

export default function cleanSet(set, startString) {
  if (startString === '') {
    return startString;
  }
  const filteredValues = Array.from(set)
    .filter((el) => el.startsWith(startString))
    .map((el) => el.substring(startString.length));

  return filteredValues.join('-');
}
