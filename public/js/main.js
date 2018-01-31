var phrase = $(".phrase").text();
var wordNumber = phrase.split(" ").length;
var phraseSize = $("#phrase-size");
phraseSize.text(wordNumber);

var typingField = $(".typing-field");
typingField.on("input", function() {
    var content = typingField.val();
    var numberWords = content.split(" ").length;
    $("#word-counter").text(numberWords);

    var numberChars = content.length;
    $("#char-counter").text(numberChars);
});