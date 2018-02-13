$("#phrase-button").click(randomPhrase);

function randomPhrase() {
    $.get("http://localhost:3000/frases", function(data) {
        console.log(data);
    });
}