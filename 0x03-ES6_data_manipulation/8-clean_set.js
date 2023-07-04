export default function cleanSet(set, startStrring) {
  const arr = [...set];
  if (!startStrring || (typeof startStrring !== 'string') || !set || !(set instanceof Set)) {
    return '';
  }
  const str = arr.filter((el) => (el.startsWith(startStrring)))
    .map((el) => el.slice(startStrring.length));
  return str.join('-');
}
