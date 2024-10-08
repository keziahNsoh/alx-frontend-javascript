/**
 * Executes a math function and manages errors.
 * @param {Function} mathFunction - The math function to execute.
 * @returns {Array} The result of the math function or an error message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
