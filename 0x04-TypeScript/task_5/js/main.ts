/ Define interfaces for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: string;  // To uniquely identify each of them
}

interface MinorCredits {
  credits: number;
  brand: string;  // To uniquely identify each of them
}

// Define two functions sumMajorCredits and sumMinorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    brand: `${subject1.brand} & ${subject2.brand}`,
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return {
    credits: totalCredits,
    brand: `${subject1.brand} & ${subject2.brand}`,
  };
}
