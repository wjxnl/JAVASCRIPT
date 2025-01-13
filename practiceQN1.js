class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("View data here.");
        console.log(this.name);
        
    }
}

class Admin extends User{
    editData(){
        console.log("Edit here");
    }
}

let student1 = new User("Anusha", "anusha@gmail.com");
let student2 = new User("Mike", "mike@gmail.com");
let admin1 = new Admin("Admin", "admin.gmail.com")

