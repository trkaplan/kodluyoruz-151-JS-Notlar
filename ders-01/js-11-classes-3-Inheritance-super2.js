class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // introduce = ()=>console.log(`My name is ${this.isim}, I'm ${this.yas} yo.`);
  // ÖNEMLİ: arrow function ile tanımlandığında içerden this'e erişim mümkün olmadığından,
  // function olarak tanımlıyoruz:
  introduce() {
    console.log(`My name is ${this.name}, I'm ${this.age} yo.`);
  }
}

class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
  introduceStudent() {
    console.log("School: " + this.school);
    super.introduce();
  }
}

const person1 = new Person("Alex", 20);
person1.introduce();
// returns:
// My name is Alex, I'm 20 yo.

const student1 = new Student("Ali", 18, "Harvard");
student1.introduceStudent();
// returns:
// School: Harvard
// My name is Ali, I'm 18 yo.

// Sonraki dosyada Prototype ile yapılışını bulabilirsiniz.
