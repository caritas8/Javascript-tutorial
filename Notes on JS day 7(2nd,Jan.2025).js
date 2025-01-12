//Removing Elements
//Web page
<!DOCTYPE HTML>
<html>
    <head>
        <script src = "text.js"> </script>
        <link type = "text/css" rel = "stylesheet" href = "stylesheet.css">
    </head>
   
    <body>
        
            <h2>CODING</h2>
                <p>Learning how to code could be really interesting and annonying</p>
                <p>However, it is profiting on the long run.</p> 
                
                <h2>Having a remote job is another nice aspect of tech </h2>
                    <p>It takes discipline to become a good developer.</p>
                    <p>Really tasking for real</p>

        

        &nbsp&nbsp; &nbsp&nbsp; &nbsp&nbsp;
        <div id = "main"></div>
            <button onclick = "newParagraph()">Click if you want to continue</button>
            <br /><br />
            &nbsp&nbsp; &nbsp&nbsp; &nbsp&nbsp;
            <button onclick = "removeHeader()">Click here to remove section</button>    
    </body>
</html>
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

function removeHeader() {
    var elementH = document.getElementsByTagName("h2") [2]; 
    /*we need to specify the position of the header we want to remove, i.e, the last header, else, it rempoves all the 
    headers. The position count starts from 0. Hence, the header is in position 2.
    */
   var parent = elementH.parentNode;
   //The above code gets the parent node of the heading which we want to delete.
   parent.removeChild(elementH);

   var element = document.getElementsByTagName("p") [4]; 
    /*we need to specify the position of the paragraph we want to remove, i.e, the last paragraph, else, it removes all 
    the paragraphs. The position count starts from 0. Hence, the paragraph is in position 2.
    */
   parent.removeChild(element);


}


