// Function that updates quantities of items in a Map where quantity is 1 to 100
export default function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the Map and update quantities
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100); // Update quantity
    }
  }
}
