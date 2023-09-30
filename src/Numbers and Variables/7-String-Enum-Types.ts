const enum StudentDetails {
  ID = "1",
  Name = "John",
  Major = "Arts",
}

let studentID: StudentDetails = StudentDetails.ID;
let studentName: StudentDetails = StudentDetails.Name;
let studentMajor: StudentDetails = StudentDetails.Major;
console.log(`${studentID}- ${studentName} has a major in ${studentMajor}`);

console.log(studentName, studentMajor);
