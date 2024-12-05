class Student {
  constructor(name, age) {
    this.name = name;
    if (age < 0) {
      console.log("Age must be a positive value!");
      this.age = 18;
    }
    else {
      this.age = age;
    }
  }

  // Method to introduce the student
  introduce() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }
}

// Creating an instance of the Student class
const student = new Student("John",18);
student.introduce();
console.log(student.name);

