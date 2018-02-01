var typingField = $(".typing-field");
var initialTime = $("#typing-time").text();

$(function() {
    updatePhraseSize();
    startCounters();
    startChronometer();
    checkTyping();
    $("#restart-button").click(restarGame);
});

function updatePhraseSize() {
    var phrase = $(".phrase").text();
    var wordNumber = phrase.split(" ").length;
    var phraseSize = $("#phrase-size");
    phraseSize.text(wordNumber);
}

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
        $("#restart-button").attr("disabled", true);
        var chronoID = setInterval(function() {
            timeRemaining--;
            $("#typing-time").text(timeRemaining);
            if (timeRemaining < 1) {
                clearInterval(chronoID);
                endGame();
            }
        }, 1000);
    });
}

function endGame() {
    typingField.attr("disabled", true);
    $("#restart-button").attr("disabled", false);
    typingField.addClass("typing-field-disabled");
    registerScore();
}

function checkTyping() {
    var phrase = $(".phrase").text();
    typingField.on("input", function() {
        var typed = typingField.val();
        var isCorrect = phrase.startsWith(typed);
        typingField.toggleClass("right-typed", isCorrect);
        typingField.toggleClass("wrong-typed", !isCorrect);
    });
}

function registerScore() {
    var tableBody = $(".score").find("tbody");
    var user = "Me";
    var numWords = $("#word-counter").text();
    var tableRow = createRow(user, numWords);
    tableRow.find(".remove-button").click(removeRow);
    tableBody.prepend(tableRow);
}

function createRow(user, numWords) {
    var tableRow = $("<tr>");
    var userColumn = $("<td>").text(user);
    var wordsColumn = $("<td>").text(numWords);
    var buttonColumn = $("<td>");
    var link = $("<a>").addClass("remove-button").attr("href", "#");
    var icon = $("<i>").addClass("small").addClass("material-icons").text("delete");
    link.append(icon);
    buttonColumn.append(link);
    tableRow.append(userColumn);
    tableRow.append(wordsColumn);
    tableRow.append(buttonColumn);

    return tableRow;
}

function removeRow(event) {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function restarGame() {
    typingField.attr("disabled", false);
    typingField.val("");
    $("#word-counter").text("0");
    $("#char-counter").text("0");
    $("#typing-time").text(initialTime);
    startChronometer();
    typingField.removeClass("typing-field-disabled");
    typingField.removeClass("wrong-typed");
    typingField.removeClass("right-typed");
}