class Person {
    constructor(name, age) {
        this._name = name; // Using underscore to indicate a private property
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for age
    set age(newAge) {
         this._age = newAge;
    }
  get age(){
    return this_age
  }
}

// Student Class extending Person
class Student extends Person {
    study(){
        console.log(`${this.name} is studying.`);
    }
}

// Teacher Class extending Person
class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching.`);
    }
	
}
window.Person = Person;
window.Teacher = Teacher;
window.Student= Student