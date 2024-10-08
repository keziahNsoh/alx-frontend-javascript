/**
 * Handles the response from a promise.
 * @param {Promise} promise - The promise to handle.
 * @returns {Object} An object indicating the status and body.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error());
}
