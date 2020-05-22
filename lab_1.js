/*
  Full Name: Elias Manuel Aguilera Yambay
  Student ID: 200393648

  Instructions:
    Follow the steps below. If you have any questions
    please feel free to use Slack to communicate. You
    are allowed to discuss the lab with other students
    but you ARE NOT permitted to copy/paste or share
    code.
  
  Rubric:
    Steps: 11.5 points
    Code Format: 10 points
    Github Link: 10 points

  NOTE: The code format and Github link marks are
    only awarded if the steps have been completed.
    (Code formatting is the visual structure of
      you code. I expect that you have used proper
      tabbing of nested structures so code readability
      is adequate.)
*/

/*
  Step 1 (2.5 points):
    Create an array that contains 4 people objects.
    Each object must have at least 2 properties.
*/

const persons = [
{
    name: "Mark",
    origin: "Toronto",
    age: 31
},

{
    name: "John",
    origin: "Barrie",
    age: 28
},

{
    name: "Paul",
    origin: "Winnipeg",
    age: 19
}
];

function returnData (persons) {
    var person1 = [];
    var i;

    for (i=0; i < persons.length ; i++){
     
       person1.push(persons[i].name);
      
     
    }
    console.log(person1);
    //console.log(persons[0]);
    //console.log(person1);

}

returnData(persons);



/*
  Step 2 (6 points):
    Create an arrow function that accepts
    a destructured object as an argument. In the
    body of your function, console.log a string
    template utilizing the properties you
    destructured.
*/

let students = {
  name: "Elias",
  age: 33,
  origin: "Paraguay"
};

//first option
printStudent=({name, age, origin})=>{
  //let {name, age, origin} = person
  console.log(`My name is ${name}, I am ${age} years old and I am from ${origin}`)
}

//second option
// printStudent=(student)=>{
//   let {name, age, origin} = student;
//   console.log(`My name is ${name}, I am ${age} years old and I am from ${origin}`)
// }

printStudent(students);



/*
  Step 3 (3 points):
    Loop over your array using a for/of loop.
    Call your arrow function passing the array item
    as an argument.
*/


for( person of persons){

  printStudent(person);

 // let {name, origin} = person;
  //console.log(`Welcome to Javascript ${name} I see that you are from ${origin}, that's awesome! `)
}



