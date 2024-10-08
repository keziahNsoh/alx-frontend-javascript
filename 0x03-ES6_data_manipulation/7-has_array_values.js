// Function that checks if all elements in an array exist in a given Set
export default function hasValuesFromArray(set, array) {
  // Use every to check if all values exist in the Set
  return array.every((value) => set.has(value));
}
