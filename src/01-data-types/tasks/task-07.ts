/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */
interface Student{
    IDStudent:String;
    FullName:String;
    GradeLevel:Number;
}
interface Course{
    IdCourse:String;
    TitleCourse:String;
    NameIndtructor:String;
    TotalLearnHours:Number;
};
interface Registration{
    student: Student
    course : Course
    RegistrationDate : String;
    PaymentComplete : boolean;
}

const Registration1 : Registration ={
student : {
    IDStudent: "Jdsok30",
    FullName: "Ficka Putri",
    GradeLevel:8,
},
course :{
    IdCourse:"foe93b9",
    TitleCourse:"Learn English",
    NameIndtructor:"Mr.Jemmy",
    TotalLearnHours:2,
},
RegistrationDate : "2026-09-07",
PaymentComplete : true,

}
const Registration2 : Registration ={
student : {
    IDStudent: "sln93tbbf",
    FullName: "Gabriel Putri",
    GradeLevel:9,
},
course :{
    IdCourse:"nw9v72ej",
    TitleCourse:"Learn It Software",
    NameIndtructor:"Mr.Reno",
    TotalLearnHours:10,
},
RegistrationDate : "2026-10-16",
PaymentComplete : true,
}
const Registration3 : Registration ={
student : {
    IDStudent: "kgiu84go",
    FullName: "cysya queenz",
    GradeLevel:11,
},
course :{
    IdCourse:"dh30djagb",
    TitleCourse:"Learn Math",
    NameIndtructor:"Mrs.Syntha",
    TotalLearnHours:2,
},
RegistrationDate : "2026-10-16",
PaymentComplete : true,
}

console.log("===Registration Data===");
console.log({
    Registration1,
    Registration2,
    Registration3,
});


