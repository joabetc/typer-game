var phrase = $(".phrase").text();
var wordNumber = phrase.split(" ").length;
var phraseSize = $("#phrase-size");
phraseSize.text(wordNumber);