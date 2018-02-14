$("#phrase-button").click(randomPhrase);
$("#phrase-id-button").click(findPhraseById);

function randomPhrase() {
    $("#spinner").show();
    $.get("http://localhost:3000/frases", changePhrase)
        .fail(function() {
            $("#error").show();
            setTimeout(function() {
                $("#error").toggle();
            }, 2000);
        })
        .always(function() {
            $("#spinner").toggle();
        });
}

function changePhrase(data) {
    var phrase = $(".phrase");
    var randomNumber = Math.floor(Math.random() * data.length);
    phrase.text(data[randomNumber].texto);
    updatePhraseSize();
    updateStartTypingTime(data[randomNumber].tempo);
}

function findPhraseById() {
    $("#spinner").show();
    var phraseId = $("#phrase-id").val();
    var phraseData = { id: phraseId };
    $.get("http://localhost:3000/frases", phraseData, changePhraseById)
        .fail(function() {
            $("#error").show();
            setTimeout(function() {
                $("#error").toggle();
            }, 2000);
        })
        .always(function() {
            $("#spinner").toggle();
        });
}

function changePhraseById(data) {
    var phrase = $(".phrase");
    phrase.text(data.texto);
    updatePhraseSize();
    updateStartTypingTime(data.tempo);
}