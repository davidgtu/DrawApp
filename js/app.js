var color = $(".selected").css("background-color");

$(".controls").on("click", "li", function() {
  $(this).siblings().removeClass("selected");
  $(this).addClass("selected");
  color = $(this).css("background-color");
})

$("#revealColorSelect").click(function() {
  changeColor();
  $("#colorSelect").toggle();
})

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function(){
  var $newColor = $("<li></li>")
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor)
  $newColor.click();
})
