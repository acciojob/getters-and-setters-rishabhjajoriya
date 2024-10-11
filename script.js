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