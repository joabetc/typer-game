var phrase = $(".phrase").text();
var wordNumber = phrase.split(" ").length;
var phraseSize = $("#phrase-size");
phraseSize.text(wordNumber);

var typingField = $(".typing-field");
typingField.on("input", function() {
    var content = typingField.val();
    var numberWords = content.split(/\S+/).length -1;
    $("#word-counter").text(numberWords);

    var numberChars = content.length;
    $("#char-counter").text(numberChars);
});

var typingRemaining = $("#typing-time").text();

typingField.one("focus", function() {
    var chronoID = setInterval(function() {
        typingRemaining--;
        $("#typing-time").text(typingRemaining);
        if (typingRemaining < 1) {
            typingField.attr("disabled", true);
            clearInterval(chronoID);
        }
    }, 1000);
});