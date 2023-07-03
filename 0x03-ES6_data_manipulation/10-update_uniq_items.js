export default function updateUniqueItems(arg) {
  if (!(arg instanceof Map)) {
    throw new Error('Cannot process');
  }

  arg.forEach((val, key) => {
    if (val === 1) {
      arg.set(key, 100);
    }
  });

  return arg;
}
