// global document,window,localStorage
// code for image changer
var ajoseImage = document.querySelector('img');

ajoseImage.onclick = function() {
    var myImages = ajoseImage.getAttribute ('src');
    if (myImages === 'image/Blessing.jpeg') {
        ajoseImage.setAttribute ('src', 'image/Ajose.jpeg');
    } else {
        ajoseImage.setAttribute ('src', 'image/Blessing.jpeg' )
    }
}

// personalized welcome message code
var nameButton = document.querySelector('button');
var myHeading = document.querySelector('h1')

function setUserName () {
    'use strict';
    var myName = window.prompt('Please enter you name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Have a nice day, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Have a nice day, ' +storedName;
}
nameButton.onclick = function () {
    'use strict';
    setUserName();
};