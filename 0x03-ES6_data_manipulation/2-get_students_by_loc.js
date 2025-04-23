// Returns an array of objects who are located in a specific city.

export default function getStudentsByLocation(arr, city) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const newArray = arr.filter((obj) => obj.location === String(city));
  return newArray;
}
