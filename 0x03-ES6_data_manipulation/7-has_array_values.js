// Returns a boolean if all the elements in the array exist within the set.

export default function hasValuesFromArray(set, arr) {
  return arr.every((value) => set.has(value));
}
