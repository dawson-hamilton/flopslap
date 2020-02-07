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

setInterval(function () {
    var b = $('#body');
    b.css("background-image", "url(images/flopslap-" + imageNumber + ".png)");
    b.css("background-size", "cover");
    imageNumber++;
    if (imageNumber >= images.length) { imageNumber = 0 }
}, 10000);