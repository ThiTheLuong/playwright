//class: is a template to build an object
class Person{
 
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    //getter
    getName(){
        return this._name;

    }
    //setter
    setName(name){
        this._name = name;
    }
}
let teo = new Person("Teo",18);
let