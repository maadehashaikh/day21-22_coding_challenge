// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
// Explain & TIP: This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.
interface Student {
  name:string;
  age:number;
  classes:string;
}
let student:Student = {
  name:"Maadeha Shaikh",
  age:22,
  classes:"enroll at IT initiative by governor Sindh",
}
console.log(student);