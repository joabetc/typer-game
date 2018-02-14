$("#score-button").click(showScore);
$("#sync-button").click(syncScore);

function registerScore() {
    var tableBody = $(".score").find("tbody");
    var user = "Me";
    var numWords = $("#word-counter").text();
    var tableRow = createRow(user, numWords);
    tableRow.find(".remove-button").click(removeRow);
    tableBody.prepend(tableRow);

    $(".score").slideDown(500);
    scrollScore();
}

function scrollScore() {
    var scorePosition = $(".score").offset().top;
    $("body").animate({
        scrollTop: scorePosition + "px"
    }, 1000);
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
    var row = $(this).parent().parent();
    row.fadeOut(function() {
        row.remove();
    });
}

function showScore() {
    $(".score").stop().slideToggle(600);
}

function syncScore() {
    var score = [];
    var rows = $("tbody > tr");
    rows.each(function() {
        var user = $(this).find("td:nth-child(1)").text();
        var words = $(this).find("td:nth-child(2)").text();
        var scoreItem = {
            usuario: user,
            pontos: words
        };
        score.push(scoreItem);
    });

    var data = {
        placar: score
    };

    $.post("http://localhost:3000/placar", data, function() {
        console.log("Saved score to server");
    });
}