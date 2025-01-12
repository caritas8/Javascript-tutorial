
/*Web page 
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p id = "para1">Some text for tonight</p>
        <p id = "para2">Some text for you tonight</p>
        <p id = "para3">Some text for tonight</p>
        <p id = "para4">Some text for tonight</p>
        
        <button onclick = "changeStyle()">Submit Big Head</button>
        
    </body>
</html>
*/

//creating a for loop for the getElementByTagName.
function changeStyle() {
    var paragraph = document.getElementsByTagName("p");
    
    var changeParaText = paragraph[0].style.fontStyle = "italic"; //code to alter para1
    var changeParaText = paragraph[1].style.fontStyle = "italic"; //code to alter para2
    var changeParaText = paragraph[2].style.fontStyle = "italic"; //code to alter para3
    var changeParaText = paragraph[3].style.fontStyle = "italic"; //code to alter para4
}
    

//for loop
function changeStyle() {
    var paragraph = document.getElementsByTagName("p");
    
    for (var i = 0; i < paragraph.length; i++ ) {
        paragraph[i].style.fontStyle = "italic";
    }
    }

    /*Webpage.html...getElementByClassName
    <!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p class = "para">Some text for tonight</p>
        <p class = "para">Some text you tonight</p>
        
        <button onclick = "changeStyle()">Submit Big Head</button>
        
    </body>
</html>


    /*using getElementByClass method.
When grabbing multiple elements in JS, a node list is created.
1.Grab the element
2. Apply CSS style
*/

function changeStyle () {
    var paragraph = document.getElementsByClassName('para');
    
    var changeText = paragraph[0].style.color = "red";
    var changeText = paragraph[1].style.color = "red";
    }

    //innerHTML 
    //webpage
    
    <!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js">
           
            
        </script>
    </head>

    <body>
        <p class = "para"> Old Text 1</p>
        <p class = "para"> Old Text 2</p>
        
        
        

        <button onclick = "changeStyle()">Submit Big Head</button>
        
    </body>
</html>
//Text.....this replaces the content of the text
    function changeStyle () {
        var paragraph = document.getElementsByClassName('para');
        
        var changeText = paragraph[0].innerHTML = "New Text 1"; 
         //innerHTML: allows us to add new content to our paragraph. It is a prop. of our method.
        var changeText = paragraph[1].innerHTML = "New Text 2";
        }


        //Here, we read our content with HTML and assign it to another.
        //webpage
        <!DOCTYPE HTML>
        <html>
            <head>
                <script src = "text.js">
                   
                    
                </script>
            </head>
        
            <body>
                <p class = "para"> Hello goat</p> 
                <p class = "para"> from PH</p>
                <p class = "para"></p>
        
                <button onclick = "changeStyle()">Submit Big Head</button>
                
            </body>
        </html>
        
        //Text

//Here, we read our content with HTML

function changeStyle() {
    var paragraph = document.getElementsByClassName('para');
        
    var firstParaText = paragraph[0].innerHTML;
    var secondParaText = paragraph[1].innerHTML;
    var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;

    var firstParaText = paragraph[0].innerHTML = ""; //This makes the paragraphs not to be displayed singly, but together.
    var secondParaText = paragraph[1].innerHTML = "";
    
}   //innerHTML property works against the content inside the paragraph element.

    

    
     
     
