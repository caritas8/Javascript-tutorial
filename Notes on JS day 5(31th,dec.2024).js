//Events in JS part 1
//Web page
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p id = "para1">Some text for today</p> 
        

        <button onclick = "changeColor()">Click here to change image.</button>
        
    </body>
</html>
//Text
/*Events in Javascript(SINGLE EVENT)
Websites are made responsive using events. It responds to whats happening on the webpage and in turn triggers the javascript code to
respond to the user.
Event handlers: create JS codes to handle a particular event that occur.
Types of events:
 1. Events that are triggered by the user e.g when a user clicks/ moves a mouse, performs a keystroke, etc
 2. Events that are not triggered ny the user but by something else, say, when a webpage loads, an event kicks of. This 
 type of event is called "ON LOAD EVENT".
Steps to take when creating an event:
1. Choose the element where we will place our event.
2.Choose the type of event we want to use.
*/
function changeColor() {
    var text = document.getElementById("para1").style.color = "blue";
}

//Events in JS part 2
//Web page
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p id = "para" onmouseover = "changeBackground()" onmouseout = "backToNormal()">Some text for today</p> 
    
        
    </body>
</html>
//Text
/*The mouseover event
This event gets triggered when the user moves his mouse over an HTML element. Hence, you can choose the element that you want to change when a user 
rolls over the element. 
*/
function changeBackground() {
    var text = document.getElementById ("para").style.backgroundColor ="red";
}

/*Here, we are not hitting any button.
Notice that when the code is ran, it is really not responsive. Hence we create another event for this such that when the cusor leaves the element, 
the specified task stops executing. We do this using the "ONMOUSEOUT" event. 
*/
function backToNormal() {
    var text = document.getElementById ("para").style.backgroundColor ="";
}

//Events in JS part 3
//Web page
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <img src = "Application letter.PNG" id = "image" onmouseover="newPicture()" onmouseout ="oldPicture()">
    
        
    </body>
</html>

/*Changing images with the mouseover event.
Here we swap images each time a user hovers over an image.
*/
function newPicture() {
    document.getElementById("image").src = "Brand screenshot.jpg"; 
}

function oldPicture() {
    document.getElementById("image").src = "Application letter.PNG"; 
}






