/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents: number = 0;
let absentStudents: number = 0;
let absentNames: string[] = [];

for (const student of attendances) {
  if (student.present) {
    presentStudents++;
  } else {
    absentStudents++;
    absentNames.push(student.name);
  }
}

const attendancePercentage: number =
  (presentStudents / attendances.length) * 100;

console.log("=== Attendance Report ===");
console.log("Present students:", presentStudents);
console.log("Absent students:", absentStudents);
console.log("Absent students:", absentNames);
console.log("Attendance percentage:", attendancePercentage + "%");