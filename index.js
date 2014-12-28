var paper = Raphael(0, 0, 700, 700);

var emoji1 = {'cx': 100,
'cy': 100,
'fill': '#ffcc00'};


var circle = paper.circle(emoji1.cx, emoji1.cy, 50);
circle.attr("fill", emoji1.fill);
