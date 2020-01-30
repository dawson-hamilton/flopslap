var images = ['images/flopslap-1', 'images/flopslap-2', 'images/flopslap-3', 'images/flopslap-4', 'images/flopslap-5', 'images/flopslap-6',
    'images/flopslap-7', 'images/flopslap-8', 'images/flopslap-9', 'images/flopslap-10', 'images/flopslap-11', 'images/flopslap-12', 'images/flopslap-13',
    'images/flopslap-14', 'images/flopslap-15', 'images/flopslap-16', 'images/flopslap-17', 'images/flopslap-18', 'images/flopslap-19', 'images/flopslap-20',
    'images/flopslap-21', 'images/flopslap-22', 'images/flopslap-23', 'images/flopslap-24', 'images/flopslap-25', 'images/flopslap-26']
var nextimage = 0;

doSlideshow();

function doSlideshow() {
    for (let index = 0; index < images.length; index++) {
        $("#body").css('background-image', 'url("' + images[nextimage++] + '")')
    }
}