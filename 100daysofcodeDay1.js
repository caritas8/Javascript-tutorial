//Creating a new element in Javascript...adding a paragraph
//Web page

<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js"> </script>
        <link type = "text/css" rel = "stylesheet" href = "stylesheet.css" />
        
           </head>
    

    <body>
        <div id = "main"> //anything can actually go into div id section, say second, etc
            <h2>CODING</h2>
                <p>Learning how to code could be really interesting and annonying</p>
                <p>However, it is profiting on the long run.</p> 
                
                <h2>Having a remote job is another nice aspect of tech </h2>
                    <p>It takes discipline to become a good developer.</p>
                    <p>Really tasking for real</p>

        </div>

            &nbsp&nbsp; //to create space
            <button onclick = "newParagraph()">Click if you want to continue</button>
    
        
    </body>
</html>

//Text
//Creating a new element in Javascript
/*Basically, the idea here is to add another element after the last element it finds within the div. For instance, assume we want
 to create a page about tech and we do not want to over crowd our page with too much info., we can put only a few info
in the page then give the user the option to click a button which would display the other information which you have
already imbedded.
*/
function newParagraph() {
    var element = document.createElement("p"); 
    //we do not need to put the opening or closing tag, the create element handles that.
    var main = document.getElementById("main"); //use getElementById to get our div
    //append paragraph(child) element to our div(parent) element
    main. appendChild(element);
    //create content using the text node. It is a child node of the paragraph node
    var text = document.createTextNode("Tech is really profiting"); 
    //This is the extra info that displays when the button is clicked..tech is......
    element.appendChild(text)
}


//Creating a new element in Javascript...adding a heading for a new section before our paragraph.
//Web page is the same as that of the paragraph 
//Text
function newParagraph() {
    //This creates a heading before our paragraph
    var elementH = document.createElement("h2"); 
    //we do not need to put the opening or closing tag, the create element handles that.
    var main = document.getElementById("main"); //use getElementById to get our div
    //append paragraph(child) element to our div(parent) element
    main. appendChild(elementH);
    //create content using the text node. It is a child node of the paragraph node
    var textH = document.createTextNode("Benefits of Tech"); 
    //This is the extra info that displays when the button is clicked..tech is......
    elementH.appendChild(textH);

    
    //The code below creates a paragraph
    var element = document.createElement("p"); 
    //we do not need to put the opening or closing tag, the create element handles that.
    /*var main = document.getElementById("main"); use getElementById to get our div. 
    But this is removed from the paragraph code because it is already exixting in the heading code.
    */
    //append paragraph(child) element to our div(parent) element
    main. appendChild(element);
    //create content using the text node. It is a child node of the paragraph node
    var text = document.createTextNode("Tech is really profiting"); 
    //This is the extra info that displays when the button is clicked..tech is......
    element.appendChild(text)
}




