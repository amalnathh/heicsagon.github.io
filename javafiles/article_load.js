var r = 1;
$(document).ready(function () {
  $("#normal").click(function () {
    $("#normal").css("border-bottom", ".1875rem solid #1a73e8");
    $("#normal").css("color", "#1a73e8");
    $("#closed").removeAttr("style");
    $("#title").css("visibility", "hidden");
    $(".primary-container").css("display", "none");
    if (r == 1) {
      $(".primarycontainer2").load("data2.htm");
      r = 2;
    } else if (r == 2) {
      $(".primarycontainer2").css("display", "block");
    }
  });
});
$(document).ready(function () {
  $("#closed").click(function () {
    $("#closed").css("border-bottom", ".1875rem solid #1a73e8");
    $("#closed").css("color", "#1a73e8");
    $("#normal").removeAttr("style");
    $("#title").css("visibility", "visible");
    $("#title").css("font-size", "4vh");
    $(".primary-container").css("display", "flex");
    $(".primarycontainer2").css("display", "none");
  });
});
