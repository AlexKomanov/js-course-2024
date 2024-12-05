// Function to create a student object
function createStudent(name, age) {
    return {
      name,
      age,
      // Method to introduce the student
      introduce: () => console.log(`My name is ${name} and I'm ${age} years old`)
    };
  }
  
  // Creating a student using the function
  const student = createStudent("John", 20);
  student.introduce();
  console.log(student.name);