// ����� � ������ � ������ ��/��

$("#b_revision").bind("click", function () {
    t = $("#f2").val();
    t.replase(/��/ig, "��");
    t.replase(/��/ig, "��");
    $("#f2").val(t);
});



$("#b_redaction").bind("click", function () {
    t.replase(/��/ig, "��");
    t.replase(/��/ig, "��");
});