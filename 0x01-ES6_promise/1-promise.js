/**
 * Returns a promise that resolves or rejects based on the success parameter.
 * @param {boolean} success - Indicates whether to resolve or reject the promise.
 * @returns {Promise} A promise that resolves with a success message or rejects with an error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
