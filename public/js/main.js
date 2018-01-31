var initialTime = $("#typing-time").text();

function updatePhraseSize() {
    var phrase = $(".phrase").text();
    var wordNumber = phrase.split(" ").length;
    var phraseSize = $("#phrase-size");
    phraseSize.text(wordNumber);
}

var typingField = $(".typing-field");

function startCounters() {
    typingField.on("input", function() {
        var content = typingField.val();
        var numberWords = content.split(/\S+/).length -1;
        $("#word-counter").text(numberWords);
    
        var numberChars = content.length;
        $("#char-counter").text(numberChars);
    });
}

function startChronometer() {
    var timeRemaining = $("#typing-time").text();

    typingField.one("focus", function() {
        var chronoID = setInterval(function() {
            timeRemaining--;
            $("#typing-time").text(timeRemaining);
            if (timeRemaining < 1) {
                typingField.attr("disabled", true);
                clearInterval(chronoID);
            }
        }, 1000);
    });
}

$("#restart-button").click(function() {
    typingField.attr("disabled", false);
    typingField.val("");
    $("#word-counter").text("0");
    $("#char-counter").text("0");
    $("#typing-time").text(initialTime);
});