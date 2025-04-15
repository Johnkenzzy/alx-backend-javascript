export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employees = [];

  for (const department of Object.values(allEmployees)) {
    employees.push(...department);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < employees.length) {
            const value = employees[index];
            index += 1;
            return { value, done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
