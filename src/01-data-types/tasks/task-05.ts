/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * npm run example src\01-data-types\tasks\task-05.ts(jalankan)
 * display the attendance data using console.log.
 */

interface attendance{
    IDEmployees:String;
    NameEmployee:String;
    DateWork:String;
    CheckIn:number; 
    CheckOut:number;
    TotalWork:number;
    ISPresent:boolean;
}

const Attendance1 : attendance ={
    IDEmployees:"Jkd356",
    NameEmployee:"Jira",
    DateWork: "2026-09-07",
    CheckIn: 9,
    CheckOut:10,
    TotalWork:2,
    ISPresent:true,
};
const Attendance2 : attendance ={
    IDEmployees:"Kjdi7d",
    NameEmployee:"Jaya",
    DateWork: "2026-09-09",
    CheckIn: 9,
    CheckOut:12,
    TotalWork:5,
    ISPresent:true,
};
const Attendance3 : attendance ={
    IDEmployees:"Ksk8v",
    NameEmployee:"Jiyzhi",
    DateWork: "2026-09-10",
    CheckIn: 8,
    CheckOut:11,
    TotalWork:9,
    ISPresent:true,
};

console.log("===Attandance Data===");
console.log({
    Attendance1,
    Attendance2,
    Attendance3,
});
