let a = 10;
let b = 3;


try {
    console.log(a);
    console.log(c);
    console.log(b);
    
}catch(err){
    console.log(err); //error is passed as argument 
    
} finally{
    console.log("404"); //run even though there is error
    
}

