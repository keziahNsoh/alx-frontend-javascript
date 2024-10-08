// Function that returns a Map of grocery items with their quantities
export default function groceriesList() {
  const map = new Map();
  // Set grocery items and quantities
  map.set('Apples', 10);
  map.set('Tomatoes', 10);
  map.set('Pasta', 1);
  map.set('Rice', 1);
  map.set('Banana', 5);
  return map; // Return the Map
}
