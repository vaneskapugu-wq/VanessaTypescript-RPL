/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 }
];

let submittedStudents: number = 0;
let notSubmittedStudents: number = 0;
let passedStudents: number = 0;
let reviseStudents: number = 0;

let notSubmittedNames: string[] = [];
let reviseNames: string[] = [];

let totalScore: number = 0;

for (let i = 0; i < submissions.length; i++) {
  const submission = submissions[i];

  if (submission.submitted) {
    submittedStudents++;
    totalScore += submission.score;

    if (submission.score >= 75) {
      passedStudents++;
    } else {
      reviseStudents++;
      reviseNames.push(submission.student);
    }
  } else {
    notSubmittedStudents++;
    notSubmittedNames.push(submission.student);

    // Students who do not submit receive score 0
    totalScore += 0;
  }
}

const averageScore: number = totalScore / submissions.length;

console.log("=== LMS Assignment Report ===");
console.log("Submitted students:", submittedStudents);
console.log("Not submitted:", notSubmittedStudents);
console.log("Passed students:", passedStudents);
console.log("Students who must revise:", reviseStudents);
console.log("Students who did not submit:", notSubmittedNames);
console.log("Students who must revise:", reviseNames);
console.log("Class average score:", averageScore);