console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`
    }

    getHeight() {
      return `${this.name} is ${this.height}cm`
    }

    getWeight() {
      return `${this.name} weighs ${this.weight}kg`
    }
  }

  const players = [
    new Player('Jonas', 18, 180, 80),
    new Player('Agnė', 20, 170, 63),
    new Player('Stano', 45, 180, 90)
  ];

  players.forEach(player => {
    console.log(player.getAge());
    console.log(player.getHeight());
    console.log(player.getWeight());
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    add(param1, param2) {
      return param1 + param2;
    }
    subtract(param1, param2) {
      return param1 - param2;
    }
    multiply(param1, param2) {
      return param1 * param2;
    }
    divide(param1, param2) {
      return param1 / param2;
    }
  }

  const arg1 = 10;
  const arg2 = 5;

  const calc = new Calculator();
  console.log(calc.add(arg1, arg2));
  console.log(calc.subtract(arg1, arg2));
  console.log(calc.multiply(arg1, arg2));
  console.log(calc.divide(arg1, arg2));

}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname[0].toUpperCase() + firstname.slice(1).toLowerCase();
      this.lastname = lastname[0].toUpperCase() + lastname.slice(1).toLowerCase();
    }

    get fullname() {
      return `${this.firstname} ${this.lastname}`;
    }

    get email() {
      return `${this.firstname.toLowerCase()}.${this.lastname.toLowerCase()}@company.com`;
    }
  }

  const emp1 = new Employee("joHn", "smits");
  console.log(emp1.fullname)

  const emp2 = new Employee("gary", "Suzxee");
  emp2.lastname = "Changed";
  console.log(emp2);
  console.log(emp2.email);

  const emp3 = new Employee("tony", "stark");
  console.log(emp3.firstname);
}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age === other.age) {
        return `${other.name} is the same age as me.`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me.`
      } else {
        return `${other.name} is older than me.`
      }
    }
  }

  const p1 = new Person("Titas", 24);
  const p2 = new Person("Arnas", 36);
  const p3 = new Person("Giedrius", 24);

  console.log(p1.compareAge(p2));
  console.log(p2.compareAge(p1));
  console.log(p1.compareAge(p3));
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }

    getArea() {
      return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

  let circleK = new Circle(4.44);
  console.log(circleK.getArea());
  console.log(circleK.getPerimeter());
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }

    get fullname() {
      return this.fname + ' ' + this.lname;
    }
    get initials() {
      return this.fname.charAt(0) + '.' + this.lname.charAt(0)
    }
  }
  const name = new Name('Titas', 'Lukosius');
  console.log(name.fullname);
  console.log(name.initials);
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  //asdasdasdasdasdasd
}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines{
    constructor(number){
      this.number = number
    }

    get ones(){
      return Math.floor(this.number / 1);
    }

    get threes(){
      return Math.floor(this.number / 3);
    }

    get nines(){
      return Math.floor(this.number / 9);
    }
  }

  const n1 = new OnesThreesNines(29);
  console.log(n1.ones);
  console.log(n1.threes);
  console.log(n1.nines);
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{
  // ... code
}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }

    getTitle() {
      return `Title: ${this.title}`;
    }
    getAuthor() {
      return `Author: ${this.author}`;
    }
  }

  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');
  console.log(PP.getTitle(), PP.getAuthor());
  console.log(H.getTitle(), H.getAuthor());
  console.log(WP.getTitle(), WP.getAuthor());
}
console.groupEnd();

