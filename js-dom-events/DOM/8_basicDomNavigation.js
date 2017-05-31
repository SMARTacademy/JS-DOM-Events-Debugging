function prevElementSibling( elem ) {
    do {
        elem = elem.previousSibling;
    } while ( elem && elem.nodeType != 1 /* or document.ELEMENT_NODE */);
    return elem;
}

function nextElementSibling( elem ) {
    do {
        elem = elem.nextSibling;
    } while ( elem && elem.nodeType != 1 );
    return elem;
}

function firstElementChild( elem ) {
    elem = elem.firstChild;
    return elem && elem.nodeType != 1 ?
        nextElementSibling( elem ) : elem;
}

function lastElementChild( elem ) {
    elem = elem.lastChild;
    return elem && elem.nodeType != 1 ?
        prevElementSibling( elem ) : elem;
}

function parent( elem, num ) {
    num = num || 1;
    for ( var i = 0; i < num; i++ )
        if ( elem != null ) elem = elem.parentNode;
    return elem;
}

