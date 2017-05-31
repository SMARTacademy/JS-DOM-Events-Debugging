function findElementById(id) {
    return document.getElementById(id);
}

function findAllTagsInScope(scopeElem, tagName) {
    // If the context element is not provided, search the whole document
    return (scopeElem || document).getElementsByTagName(tagName);
}

function getClassElements(className, elementName) {
    var result = [];
    // Locate the class name (allows for multiple class names)
    var regex = new RegExp("(^|\\s)" + className + "(\\s|$)");

    // Limit search by type, or look through all elements
    var elements = document.getElementsByTagName(elementName || "*");
    for ( var i = 0; i < elements.length; i++ )
        // If the element has the class, add it for return
        if ( regex.test(elements[i].className) ) result.push( elements[i] );

    // Return the list of matched elements
    return result;
}

function demo_11() {
    var list = findElementById('list');
    var listItems = findAllTagsInScope(list, 'li');
    var headers = getClassElements('header', 'h1');
}