/**
 * Returns the value of the promise that resolves first.
 * @param {Promise} chinaDownload - The promise for the China download.
 * @param {Promise} USDownload - The promise for the US download.
 * @returns {Promise} The value of the first resolved promise.
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
