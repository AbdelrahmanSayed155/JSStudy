
function Car(){
    this.color;
    this.name;
    this.logoName;
}
var aliCar = new Car();
var samyCar = new Car();
aliCar.color = "red";
aliCar.logoName ="Hamer";
aliCar.name ="Hamer 2 ";
console.log(aliCar.color)

var pen={
    "name":"pencile",
    "cost":10
}
var newpen = Object.create(pen);
newpen.__proto__.tall =150;
pen.tall =20;
newpen.tall =70;
console.log(newpen.tall);
console.log(pen.tall);
newpen.name ="AbdoLOLOL"
console.log(pen.name);

var person ={
    "name":"Samy",
    "age":120
}

var student ={
    schoolName:"Tahrir"
}

Object.assign(person,student);

console.log(person);
console.log(student)




function Building(a){
    this.area = a
    this.foo = function(){
        console.log("Building Function ");
    }
}

function School(a,numberofStudent){
    Building.call(this,a);
    this.capacity = numberofStudent;
}

//School.prototype =  Object.create(Building.prototype);

var d = new School(10,12);
d.foo();


/// Asynchronose 

async function goal(){
 console.log("strart go ");
   var dd =  await new Promise( resolve =>{
    console.log("Cooking");
    setTimeout(()=>{
    console.log("seman");
      resolve('finished');
    } , 2000)
   } );
   console.log(" call_Back ");
}


console.log(" start main ");
goal();
console.log("end main");
var fileinput1 = window.document.getElementById("fileinput1");
fileinput1.onchange = function (){
    var fristfile =  fileinput1.files[0];
    var fileRead = new FileReader();
    fileRead.readAsText(fristfile);
    fileRead.onload = function (){
        console.log(" File Loaded ");
        console.log(fileRead.result);
    }

}









