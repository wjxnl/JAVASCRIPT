//concept of constructor 
class car{
    constructor(){
        console.log("New object created"); // initialised first
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
}

let toyota = new car();
toyota.setBrand("version 1");



//inheritance
class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
    code(){
        console.log("code");
    } 
}

class engineer extends person{
    design(){
        console.log("design");
    }
}
class doctor extends person{
    operate(){
        console.log("operate");
    }
}

let engObj = new engineer();
let doctorObj = new doctor();