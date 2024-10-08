/**
 * Returns a promise that resolves immediately.
 * @returns {Promise} A promise that resolves.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve();
  });
}
