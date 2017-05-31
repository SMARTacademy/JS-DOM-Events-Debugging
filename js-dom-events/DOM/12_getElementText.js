function getInnerText(elements) {
    var text = "";

    // If an element was passed, get it’s children, 
    // otherwise assume it’s an array
    elements = elements.childNodes || elements;

    // Look through all child nodes
    for ( var i = 0; i < elements.length; i++ ) {
        // If it’s not an element, append its text value
        // Otherwise, recurse through all the element’s children 
        text += elements[i].nodeType != 1 ?
            elements[i].nodeValue : getInnerText(elements[i].childNodes);
    }

    // Return the matched text
    return text;
}

function demo_12() {
    var ul = document.getElementsByTagName('ul')[0];
    var innerText = getInnerText(ul);

    var innerHtml = ul.innerHtml;
}
