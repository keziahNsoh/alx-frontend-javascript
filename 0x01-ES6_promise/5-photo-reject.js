/**
 * Rejects a promise with an error message.
 * @param {string} filename - The name of the file to upload.
 * @returns {Promise} A rejected promise.
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
