/* global $ from jquery library */
function update() {
    $.getJSON("/json", function(data) {
        document.title = data.songtitle;
        $("#currentSong").html("Now Playing: " + data.songtitle);
        $("#currentListeners").html("Tuned in - " + data.currentlisteners);
    })
}
update();
setInterval(update, 1000);

var audio = $("audio")[0];
function togglePlay() {
    if ( audio.paused ) {   // If the video is paused, we play it.
        $("#play").attr("src", "static/pauseButton.png");
        audio.play();
        if ( audio.ended ) audio.load();

    } else {                // If the video is playing, we pause it.
        $("#play").attr("src", "static/playButton.png");
        audio.pause();

    }
}

$("#play").click(togglePlay);
$("#donate").click(function(){ window.open(donateLink); })