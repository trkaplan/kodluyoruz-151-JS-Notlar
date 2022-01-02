function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  console.log(`My name is ${this.name}, I'm ${this.age} yo.`);
};

/* var person1 = new Person("Alex",20);
person1.introduce(); */
// returns:
// My name is Alex, I'm 20 yo.

function Student(name, age, school) {
  this.school = school;
  Person.call(this, name, age);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduceStudent = function () {
  console.log("School: " + this.school);
  this.introduce();
};

var student1 = new Student("Ali", 18, "Harvard");
student1.introduceStudent();
// returns:
// School: Harvard
// My name is Ali, I'm 18 yo.
