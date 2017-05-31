function stopBubble(e) {
    // If an event object is provided, then this is a non-IE browser
    if ( e )
        // and therefore it supports the W3C stopPropagation() method
        e.stopPropagation();
    else
        // Otherwise, we need to use the Internet Explorer way of cancelling event bubbling
        window.event.cancelBubble = true;
}

function demo_20() {
    // Locate, and traverse, all the elements in the DOM
var all = document.getElementsByTagName("*");
for ( var i = 0; i < all.length; i++ ) {

    // Watch for when the user moves his mouse over the element
    // and add a red border around the element
    all[i].onmouseover = function(e) {
        this.style.border = "1px solid red";
        stopBubble( e );
    };

    // Watch for when the user moves back out of the element
    // and remove the border that we added
    all[i].onmouseout = function(e) {
        this.style.border = "0px";
        stopBubble( e );
    };

}
}