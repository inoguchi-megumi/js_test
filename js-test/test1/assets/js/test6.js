
$(function(){

  var xLine;
  var yLine;
  var items;
  var scale;

    $("body").append("<div class='container'></div>");
    $container = $(".container");
    xLine = 5;
    yLine = 5;
    scale = 100;
    items = xLine * yLine;

    for(var i = 0; i < yLine; i++){
      for(var n = 0; n < xLine; n++){
        $container.append("<div class='box box"+i+"_"+n+"'></div>");
        var box = ".box"+i+"_"+n;
        var $box =$(box);

        $box.css({
          "width": scale,
          "height": scale,
          "top": i * scale,
          "left": n * scale,
          "background-color":"#ccc",
          "position": "absolute",
          "border": "solid 1px #000"
        });
      }
    }

});
