// Declaration of Persona Number 1 Infomation
var per1name= "Maria Delos Santos Las Marias";              
var per1age = 25;                                           
var per1address ="Upper Session Road,Baguio City,Benguet";

// Declaration of Persona Number 1 Infomation
var per2name = "Juan Gamoso Dela Cruz";                    
var per2age = 28;                                          
var per2address ="San Nicolas,Candon City, Ilocos Sur";    

//Rearranging the name sequence to LASTNAME, First Name Middle Name of Persona 1
var per1nameSplit = ["Maria", "Delos", "Santos", "Las", "Marias"];
var rearrangedName = per1nameSplit[3].toUpperCase() + " " + per1nameSplit[4].toUpperCase() + ", " + per1nameSplit[0] + " " + per1nameSplit[1] + " " + per1nameSplit[2];
var Name1 = "Name: " + rearrangedName +", " + "Age: " + per1age + ", " + "Address: " + per1address;

//Rearranging the name sequence to LASTNAME, First Name Middle Name of Persona 2
var per2nameSplit = ["Juan", "Gamaso", "Dela", "Cruz"];
var rearrangedName2 = per2nameSplit[2].toUpperCase() + " " + per2nameSplit[3].toUpperCase() + ", " + per2nameSplit[0] + " " + per2nameSplit[1];
var Name2 = "Name: " + rearrangedName2 +", " + "Age: " + per2age + ", " + "Address: " + per2address;

//Variable Manipulation. Storing per1 and per2 name and address length
var per1namelength = per1name.length;  
var per2namelength = per2name.length;                    
var per1addresslength = per1address.length;                      
var per2addresslength = per2address.length;   

//Performing deffirent operators
var totalSum = per1age + per2age + per1namelength + per2namelength + per1addresslength + per2addresslength; 
var addedage = per1age + per2age; // Addition
var sunleng = addedage - per1namelength; // Subraction
var mul = sunleng * per2namelength; //Multiplication
var power = per2addresslength ** per1addresslength; //Exponentiation

console.log(Name1);
console.log(Name2);
console.log(totalSum);
console.log(addedage);
console.log(sunleng);
console.log(mul);
console.log(power);