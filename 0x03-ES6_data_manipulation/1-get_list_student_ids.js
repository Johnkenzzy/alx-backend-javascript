// Returns an array of ids from a list of object.

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  const newArr = arr.map((obj) => obj.id);
  return newArr;
}
