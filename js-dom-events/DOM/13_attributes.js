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
    }

    // Return the value of the attribute
    return elem[attrName] || elem.getAttribute(attrName) || '';
}

function demo_13() {
   // Set the class for the first <h1> Element
attr( document.getElementsByTagName("h1")[0], "class", "header" );

// Set the value for each <input> element
var inputs = document.getElementsByTagName("input");
for ( var i = 0; i < inputs.length; i++ ) {
    attr( inputs[i], "value", "" );
}

attr(document.getElementsByTagName('input')[1], 'name', 'invalid')

for ( var i = 0; i < inputs.length; i++ ) {
    if ( attr( inputs[i], "name" ) == "invalid" ) {
        inputs[i].style.border = "2px solid red";
        }
    }    
}

