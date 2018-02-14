$("#phrase-button").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases", changePhrase)
        .fail(function() {
            $("#error").show();
            setTimeout(function() {
                $("#error").toggle();
            }, 2000);
        });
}

function changePhrase(data) {
    var phrase = $(".phrase");
    var randomNumber = Math.floor(Math.random() * data.length);
    phrase.text(data[randomNumber].texto);
    updatePhraseSize();
    updateStartTypingTime(data[randomNumber].tempo);
}