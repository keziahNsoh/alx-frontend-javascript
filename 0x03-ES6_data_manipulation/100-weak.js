// Create a WeakMap to track endpoint queries
export const weakMap = new WeakMap();

// Function that tracks API query calls and raises an error if exceeded
export function queryAPI(endpoint) {
  // Initialize the count for the endpoint if not already present
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the query count
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Throw an error if the count exceeds 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
