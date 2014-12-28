var paper = Raphael(0, 0, 700, 700);
var emojis = [];

function createObjects() {

  emoji1 = {
    'cx': 100,
    'cy': 100,
    'fill': '#ffcc00'
  };

  emoji2 = {
    'cx': 300,
    'cy': 100,
    'fill': '#C62828'
  };

  emoji3 = {
    'cx': 500,
    'cy': 100,
    'fill': '#1565C0'
  };

  emojis.push(emoji1);
  emojis.push(emoji2);
  emojis.push(emoji3);



}


function drawShapes() {

  for(var i in emojis) {

    var emoji = emojis[i];

    var circle = paper.circle(emoji.cx, emoji.cy, 50);
    circle.attr("fill", emoji.fill);


  }


}



createObjects();
drawShapes();
