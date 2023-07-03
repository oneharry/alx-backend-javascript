export default function cleanSet(set, startStrring) {
  const arr = [...set];
  if (!startStrring) {
    return '';
  }
  const str = arr.filter((el) => (el.startsWith(startStrring)))
    .map((el) => el.slice(startStrring.length));
  return str.join('-');
}
