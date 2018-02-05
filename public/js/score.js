$("#score-button").click(showScore);

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

function showScore() {
    $(".score").toggle();
}