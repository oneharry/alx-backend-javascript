export const weakMap = new WeakMap();
export function queryAPI(arg) {
  let numCalls = weakMap.get(arg) || 0;
  numCalls += 1;
  if (numCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(arg, numCalls);
}
