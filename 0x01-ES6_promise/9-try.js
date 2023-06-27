export default function guardrail(mathFunction) {
  const arr =[];
  try {
    const result = mathFunction();
    arr.append(result);
  } catch(error) {
    arr.append(error);
  } finally {
    arr.append('Guardrail was processed');
    return arr;
  }
}
