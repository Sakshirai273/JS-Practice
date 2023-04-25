// console.log('Hello World');
// let name = 'sakshi';
// let isApproved = false;
// let firstName = undefined ;
// let selectedColor = null;

// let selectedColors = ['red' , 'blue'];
// selectedColors[2] = 1;
// console.log(selectedColors.length);

//PERFORMING A TASK TYPE OF FUNCTIONS 
// function greet(){
//     console.log('helo world');
// }
// greet();

// function greet(name){
//     console.log('hello ' + name);
// }
// greet('John');
// greet('Mary');

// function greet(name , lastName){
//     console.log('Hello ' + name + ' ' + lastName);
// }
// greet('John' , 'Smith');
// greet('Mary' ,'Sakshi');

// CALCUALTE A VALUE
// function  square(number){
//     return number * number;
// }
// let number = square(2);
// console.log(number); 
// console.log(square(2));


//OBJECTS
// var myArray = new Array();
// myArray[0] = 8;
// myArray[1] ="hello";

// var myCar = new Object();
// myCar.maxSpeed = 50;
// myCar.driver = "Shaun";
// myCar.drive = function(){
//     console.log("now driving");
// };
//  myCar.drive();
//  var myCar2 = {maxSpeed : 70 , 
//     driver: "Net Ninja" ,
//     drive:function() {
//     console.log("now driving again");
//  }
// };  
// console.log(myCar2.maxSpeed);
// myCar2.drive();
//  var myCar2 = {maxSpeed : 70 , 
//     driver: "Net Ninja" ,
//     drive:function(speed,time) {
//     console.log(speed * time);
//  } ,
//  logDriver : function(){
//     console.log("driver name is " + this.driver);
//  }
//  };
//  myCar2.logDriver();
//  console.log(myCar2.maxSpeed);
//  myCar2.drive(50,3);


// var Car = function(maxSpeed , driver){
//    this.maxSpeed = maxSpeed;
//    this.driver = driver;
//    this.drive = function (speed , time){
//       console.log(speed*time);
//    };
//    this.logDriver = function(){
//       console.log("driver name is" + this.driver );
//    };     
//    }
//    var myCar = new Car(70 , "Ninja man");
//    var myCar2 = new Car(40 , "Humpty Dumpty");
//    var myCar3 = new Car(40 , "Shaun");
//    var myCar4 = new Car(90, "James Bond");

//    myCar.drive(30,5);
//    myCar3.logDriver();
 var myPastDate = new Date(1545, 11 ,2 ,10 ,30 , 15);
 var myFutureDate = new Date(2515 , 0 , 31 , 10 ,30 , 15);

 console.log(myPastDate);
 console.log(myFutureDate);
   var myDate = new Date();
   console.log(myDate);
