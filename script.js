class Person{
    constructor(name,age){
        this._name = name
        this.ageNum = age
    }
    get name(){
        return  this._name
    }
    
    set age(value){
        this.ageNum = value
    }
    get age(){
        return this.ageNum
    }
}
class Student extends Person{
    
    study(){
        console.log(`${this.name} is studying`)
    }
}
class Teacher extends Person{
    
    teach(){
        console.log(`${this.name} is teaching`)
    }
}
