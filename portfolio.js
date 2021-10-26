
function homeScroll () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    //document.getElementById('home').scrollIntoView({block: 'center'});
}

function aboutScroll () {
    document.getElementById('about').scrollIntoView({block: 'center'});
}

function projectsScroll () {
    document.getElementById('projects').scrollIntoView({block: 'center'});
}

function contactScroll () {
    document.getElementById('contactInfo').scrollIntoView({block: 'center'});
}
