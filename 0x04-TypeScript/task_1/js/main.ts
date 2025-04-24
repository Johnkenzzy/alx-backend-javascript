interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional properties like contract
}

interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Interface to describe the constructor parameters
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface to describe the methods in StudentClass
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// StudentClass implements StudentInterface
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
