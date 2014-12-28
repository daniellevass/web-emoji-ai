var paper = Raphael(0, 0, 700, 700);
var emojis = [];

var bodyColours = ["#C62828", "#6A1B9A", "#283593",
"#1565C0", "#0277BD", "#0097A7"];
var eyeColours = ["#FFEBEE", "#263238", "#607D8B", "#ECEFF1"];


function randomIntFromInterval(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}


function createObjects() {

  emoji1 = {
    'cx': 100,
    'cy': 100,
    'fill': bodyColours[randomIntFromInterval(0,
      bodyColours.length-1)],
      'eyeColour': eyeColours[randomIntFromInterval(0,
        eyeColours.length-1)]
      };

  emoji2 = {
    'cx': 300,
    'cy': 100,
    'fill': bodyColours[randomIntFromInterval(0,
      bodyColours.length-1)],
      'eyeColour': eyeColours[randomIntFromInterval(0,
        eyeColours.length-1)]
      };

  emoji3 = {
    'cx': 500,
    'cy': 100,
    'fill': bodyColours[randomIntFromInterval(0,
      bodyColours.length-1)],
      'eyeColour': eyeColours[randomIntFromInterval(0,
        eyeColours.length-1)]
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
    eyeLeft.attr('stroke', 'none');

    var eyeRight = paper.circle(emoji.cx + 18, emoji.cy - 5, 3);
    eyeRight.attr("fill", emoji.eyeColour);
    eyeRight.attr('stroke', 'none');

    face.click(function(event) {
      console.log(this.id);
    });

  }


}


createObjects();
drawShapes();
