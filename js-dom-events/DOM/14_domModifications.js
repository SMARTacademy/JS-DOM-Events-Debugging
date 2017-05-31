// Creating elements
function demo_14() {
    // Inserting into the DOM
    var virtualElement = document.createElement("div");
    var virtualTextNode = document.createTextNode("Hello!");
    document.body.appendChild(virtualElement).appendChild(virtualTextNode);

    document.body.lastChild.innerHTML = "<strong>I am inside!</strong>"

    // Removing nodes
    document.body.removeChild(document.body.lastChild)
}




