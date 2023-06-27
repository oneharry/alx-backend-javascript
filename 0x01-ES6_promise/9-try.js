export default function guardrail(mathFunction) {
  const arr = [];
  try {
    const result = mathFunction();
    arr.push(result);
  } catch (error) {
    arr.push(`Error: ${error.message}`);
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
