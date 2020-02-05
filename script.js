var imageNumber = 0;
const images = [
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`];

// setInterval(function () {
//     $("#body").css('background-image', 'url("' + images[imageNumber] + '")');
//     $("#body").css("background-size", "cover");
//     imageNumber = imageNumber + 1;
//     console.log(imageNumber);
//     if (imageNumber == images.length) {
//         imageNumber = 0;
//     }
// }, 1000);

setInterval(function () {
    var b = $('#body');
    b.css("background-image", "url(" + images[imageNumber] + ")");
    b.css("background-size", "cover");
    imageNumber = imageNumber + 1;
    console.log(images[imageNumber])
    console.log(imageNumber);
    if (imageNumber >= images.length) { imageNumber = 0 }
}, 1000);