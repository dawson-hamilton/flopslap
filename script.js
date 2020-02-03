let imageNumber = 1;
const images = new Array(
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`,
    `images/flopslap-` + `${imageNumber}` + `.png`, `images/flopslap-` + `${imageNumber}` + `.png`);

images.forEach(element => {
    let el = element;
    $("#body").css('background-image', 'url("' + el + '")');
    $("#body").css("background-size", "cover");
    imageNumber++;
}, 100);