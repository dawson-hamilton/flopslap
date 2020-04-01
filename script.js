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

function latestVideo() {
    const queryUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCHWSmYmHrfyYlSUnx7DLQZg&maxResults=1&order=date&type=video&key=AIzaSyCQOcWlQCBGfQfp5RuHHvpnEWVHiyetIIk"
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response.items[0].id.videoId);
        $("#video").removeClass("invisible");
        $("#video").attr("src", `https://www.youtube.com/embed/${response.items[0].id.videoId}`)
    });
};