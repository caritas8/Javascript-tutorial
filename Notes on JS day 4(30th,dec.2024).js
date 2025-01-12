//To change an image using the src property.
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p class = "para"> Hello goat</p> 
        <img src = "Application letter.PNG" id = "image"/> <br></br>

        <button onclick = "changeStyle()">Click here to change image.</button>
        
    </body>
</html>

/*Changing an image using Javascript. It is done with the src property.
The src property works against the src attribute in the img tag, which allows us to chang9e an image to another image.
We use getElementById method.....grabs the id of image.
*/

function changeStyle () {
    document.getElementById("image").src = "Brand Screenshot.jpg";
}