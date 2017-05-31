function hasAttribute( elem, attrName ) {
    return elem.getAttribute(attrName) != null;
}

function attr(elem, attrName, attrValue) {
    // Make sure that a valid name was provided
    if ( !attrName || attrName.constructor != String ) return '';

    // Figure out if the name is one of the weird naming cases
    attrName = { 'for': 'htmlFor', 'class': 'className' }[attrName] || attrName;

    // If the user is setting a value, also
    if ( attrValue != null ) {
        // Set the quick way first
        elem[attrName] = attrValue;

        // If we can, use setAttribute
        if ( elem.setAttribute )
            elem.setAttribute(attrName,attrValue);
    }

    // Return the value of the attribute
    return elem[attrName] || elem.getAttribute(attrName) || '';
}

function demo_13() {
   // Set the class for the first <h1> Element
attr( document.getElementsByTagName("h1")[0], "class", "header" );

// Set the value for each <input> element
var input = document.getElementsByTagName("input");
for ( var i = 0; i < input.length; i++ ) {
    attr( input[i], "value", "" );
}

attr(document.getElementsByTagName('input')[1], 'name', 'invalid')

// Add a border to the <input> Element that has a name of ‘invalid’
var input = document.getElementsByTagName("input");
for ( var i = 0; i < input.length; i++ ) {
    if ( attr( input[i], "name" ) == "invalid" ) {
        input[i].style.border = "2px solid red";
    }
} 
}

