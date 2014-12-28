var paper = Raphael(0, 0, 700, 700);
var emojis = [];

function createObjects() {

  emoji1 = {
    'cx': 100,
    'cy': 100,
    'fill': '#ffcc00',
    'eyeColour': '#0D47A1'
  };

  emoji2 = {
    'cx': 300,
    'cy': 100,
    'fill': '#C62828',
    'eyeColour': '#558B2F'
  };

  emoji3 = {
    'cx': 500,
    'cy': 100,
    'fill': '#1565C0',
    'eyeColour': '#B71C1C'
  };

  emojis.push(emoji1);
  emojis.push(emoji2);
  emojis.push(emoji3);


}


function drawShapes() {

  for (var i in emojis) {

    var emoji = emojis[i];

    var face = paper.circle(emoji.cx, emoji.cy, 50);
    face.id = i;
    face.attr("fill", emoji.fill);

    var eyeLeft = paper.circle(emoji.cx - 18, emoji.cy - 5, 3);
    eyeLeft.attr("fill", emoji.eyeColour);

    var eyeRight = paper.circle(emoji.cx + 18, emoji.cy - 5, 3);
    eyeRight.attr("fill", emoji.eyeColour);

    face.click(function(event) {
      console.log(this.id);
    });

  }


}


createObjects();
drawShapes();
