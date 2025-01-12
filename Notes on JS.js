//conditionals

var fruit = "Fish";

if (fruit == "apple"){
        alert("Im hungry");
}
else {
        alert("Ya mad");
}
        

var name = "Henry" // global varible....remians alive as long as the page is loaded

function printName () {
      var name2 = "Sarah" //local variable....disappears when the function is done 
}

printName ();

document.write(name2);


/pass by value

function batting(player, distance)  {  //parameters
        var more = player + " hit the ball " + distance + " feet";

        document.write(more); 
}

batting("Steve", 355);//we pass in arguments to parameters



//Arrays
 /*  var road = "stone"
     var road2 = "dirt"
     []//used to call an array
  */

     var roads = ["stone", "dirt", "cement", "tar"];

     //to use the dirt element/value, assign the array name (road) and its index number(1) to a variable
     roads[1] = "rabbit";
   
     var roadPassed = roads[1];
   
   document.write(roadPassed);
   
   /*TO UPDATE AN ARRAY, say, change dirt to rabbit:
   Specify the array name, the index number and the value that you want to update.
   roads[1] = "rabbit";
   */
   
   /* Long ahnd method of writing an array
   var roads = []
   roads [0] = "stone"
   roads [1] = "dirt"
   roads [2] = "cement"
   roads [3] = "tar"
   */
   

   //Concept of Objects in Javascript
   
   var height = "green";
   var sound = "bleat";
   var size = "200";

   var goat = {
        height: "green", //name(height) value(green) pair
        sound: "bleat",
        size: "200",
};

goat.sound; //object.property

/*Differnce betwn the object and array is that arrays uses index to rep. their elements..hence, they
are not normal objects. But objects use their name value pair directly.
*/

/* Parts of an object
1. Properties that describe the object
2. Actions that the object can do, e.g run, sleep, etc.
*/

/* Giving our objects actions
To do this, we use functions to create actions for our objects.
Note that when we place a function inside an object, the function becomes a method.
*/
var height = "green";
var sound = "bleat";
var size = "200";

Function yell {

}

var goat = {
        height: "green", //name(height) value(green) pair
        sound: "bleat",
        size: "200",
        yell: function() {
                document.write("Goats are very stubborn")}
        
};

goat.sound;
goat.yell();  // object.method
              //document.write

//Implementing objects in J.s
              var goat = {
                age: "12",
                sound: "bleat",
                troubleSome: "true"
            };
            
            //document.write(orc.age);
            
            var newAge = goat.age + 3;
            document.write(newAge);
            
            /*to update the value of a property, say age
            var newAge = goat.age + 3;
            document.write(newAge);
            
            */
            
           
            var goat = {
                age:26,
                sound: "bleat",
                troubleSome: true,
                eat: function() {
                    document.write("YUM YUM!");
                }
            };
            
            goat.troubleSome = false;
            
            if (goat.troubleSome == true) {
                goat.eat();
            }
            
            else{
                document.write("not eating");
            }
            
            
            //document.write()
            
            //var newAge = goat.age + 2;
            
            //document.write(newAge);
            
            /*to update the value of a property, say age
            var newAge = goat.age + 3;
            document.write(newAge);
            
            */

            
            /* Global objects in Jvascript
            Custom objects: objects we provide by ourselves
            Global objects: objects that Javascipt provides. We just use their props and methods.
            
            An example of custom objects:
            var goat = {
            height: "green", //name(height) value(green) pair
            sound: "bleat",
            size: "200",
            };
            goat.size;

            Stand alone or primitive variables are variables that contain one value, say string, int, bool

            Examples of Global objects:
            1. String
            var height = "green"; ......Js then provides a string object
            var size = 200;..... provides maths and number objects
            */

// Strings ojects
            var hello = "Hello, how are you doing?";

        hello = hello.toUpperCase(); 
        // Displays all the string in uppercase....lowercase too.

        hello = hello.length; 
        /*Output = 25, i.e there are 25 characters(units) in the string. It counts using index just like an array. 
        Also counts empty spaces as a unit. Additionally, it throws an xtra unit after the last character.
        */

        hello = hello.charAt(4);
        // Gives the character at the 4th index, i.e 'o' 

        hello = hello.replace("doing", "today");
        //Replaces a word with another. (replaced, replacee)

        hello = hello.bold();
        // to make the strings bold.
       
        hello = hello.italics();
        // to make the strings bold.
       
document.write(hello);

//Maths and number objects
var number = 4.7;

var newNumber = 26 + Math.round(number);
//to round up/down a number

document.write(newNumber);

var number = 4.2;
var newNumber = 26 + Math.ceil(number);
// to round up in one direction...rounds 4.2 up to 5

 document.write(newNumber);

 var number = 4.7;
var newNumber = 26 + Math.floor(number);
// to round down in one direction...rounds 4.7 down to 4

document.write(newNumber);

var number = Math.sqrt(64);
//finds the square root of the function
document.write(number);








            
            
            
            
            