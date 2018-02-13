$("#phrase-button").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases", function(data) {
        var phrase = $(".phrase");
        phrase.text(data[0].texto);
    });
}