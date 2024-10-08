// Function that returns a string of all set values that start with a specific string
export default function cleanSet(set, startString) {
  if (!startString) return ''; // Return empty string if startString is empty
  // Filter and join the set values
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
