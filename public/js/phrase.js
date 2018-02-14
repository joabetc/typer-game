$("#phrase-button").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases", changePhrase);
}

function changePhrase(data) {
    var phrase = $(".phrase");
    var randomNumber = Math.floor(Math.random() * data.length);
    phrase.text(data[randomNumber].texto);
    updatePhraseSize();
}