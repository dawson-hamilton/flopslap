var imageNumber = 1;
const images = [
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`,
    `images/flopslap-` + imageNumber + `.png`, `images/flopslap-` + imageNumber + `.png`
];

setInterval(function () {
    var b = $('#body');
    $("#body").fadeOut(400, function () {
        b.attr("src", "images/flopslap-" + imageNumber + ".png");
    })
        .fadeIn(400, function () {
            b.attr("src", "images/flopslap-" + imageNumber + ".png")
            imageNumber++;
        });
    if (imageNumber >= images.length) { imageNumber = 0 }
}, 10000);