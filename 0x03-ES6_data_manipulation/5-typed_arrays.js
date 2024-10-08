// Function that creates an Int8TypedArray and sets a value at a specific position
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an ArrayBuffer and an Int8Array view
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value; // Set the value at the specified position
  return new DataView(buffer); // Return a DataView of the buffer
}
