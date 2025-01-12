
  /*Another way to create objects..using the "new" keyword. It allows us to copy or instance
 an existing object(refernce obj.) and use it. 
E.g the Date object.
()......called the constructor..it builds a copy of the object
*/

var todaysDate = new Date();
document.write(todaysDate);

var todaysDate = new Date();
var useString = todaysDate.toDateString();
document.write(useString);
/*to make the output more readable in a string format, we use an object to do this..
var useString = todaysDate.toDateString();
*/

var todaysDate = new Date();
todaysDate.setYear(2017);   /*nothing changed because get is using whats available on the seystem clock.
 Change it to set year to be able to modify the year in the output
*/
 /* get method is recieving an already existing stuff.
An opposite of this is the set method. Here, we define the values that we want.
*/
document.write(todaysDate);


/*Document Object Module (DOM)
It allows us to use our Javascrript code to access part of the webpage.
Document reps the entire webpage.
Nodes: There are 12 types of nodes...Nodes are specific types of objects
1. Element nodes..e.g, <div></div>, <p></p>, etc 
2. Attribute..e.g id, class attributes
3. Text node..e.g This is a fish webpage
*/

/*WEBPAGE.HTML code been in use....
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        
    </body>
</html>
*/

/*Updated webpage.html code...
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p id = "para1">Some text for tonight</p>
       
        We grab the element ID(para1) using the GetElementById method...part of the document object.
        Hence, we create a variable(in the text.js) to hold our id.
        We then pass in our parameter, which is the paragraph id

        <button onclick = "changeStyle()">Submit</button>
        
    </body>
</html>
*/


function changeStyle() {

     var text = document.getElementById("para1").style.color = "purple";
    var text = document.getElementById("para1").style.backgroundColor= "orange";
    var text = document.getElementById("para1").style.fontStyle= "italic";

    // NB padding-left, border-left...etc
}


/*getElementByTag method
tag e.g <p></p>
getElementById is specific, but by Tag grabs the whole tag regardless of the number
It works like arrays whereby indexing is used to represent elements.
*/
function changeStyle() {
    var paragraph = document.getElementsByTagName("p");
    
    var changeParaText = paragraph[0].style.fontStyle = "italic"; //code to alter para1
    var changeParaText = paragraph[1].style.fontStyle = "italic"; //code to alter para2
    var changeParaText = paragraph[2].style.fontStyle = "italic"; //code to alter para3
    var changeParaText = paragraph[3].style.fontStyle = "italic"; //code to alter para4
    
    //we can just create a loop to repaet the paragraphs 4 times instead of writing them out singly.
 }
    
     
