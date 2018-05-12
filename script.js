// Поиск в тексте и замена жы/шы

$("#b_revision").bind("click", function () {
    t = $("#f2").val();
    t.replase(/жы/ig, "ЖИ");
    t.replase(/шы/ig, "ШИ");
    $("#f2").val(t);
});



$("#b_redaction").bind("click", function () {
    t.replase(/ЖИ/ig, "жи");
    t.replase(/ШИ/ig, "ши");
});