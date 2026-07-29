/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */
interface Student{
    IdStudent:string;
    FullName:string;
    Age:number;
    isActiveStudent:boolean;
};
const student1 : Student = {
    IdStudent: "ST2026001",
    FullName:"Gaby zyz",
    Age:18,
    isActiveStudent: true,
};
const student2 : Student = {
    IdStudent: "ST2326001",
    FullName:"violan etio",
    Age:16,
    isActiveStudent: true,
};
const student3 : Student = {
    IdStudent: "ST2026013",
    FullName:"vylafor ryska",
    Age:17,
    isActiveStudent: true,
};
console.log("===Student Data===");
console.log({
    student1,
    student2,
    student3,
});


