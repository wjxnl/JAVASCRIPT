//Super Keyword:: It is used to call the constructor of parents class from child class.
//parents class constructor should be called first before child class constructor

class Person {
    constructor(){
        this.species = "homo sapiens";
    }

    eat(){
       console.log("Eaatttt");
    }
}

class engineer extends Person{
    constructor(branch){
        super(); //to invoke parent class's constructor
        this.branch = branch;
    }

    work(){
        super.eat(); //to invoke parents class methods and properties
        console.log("Code, sleep, repeat!");
    }
}

let engObj = new engineer("Software Engineer");


