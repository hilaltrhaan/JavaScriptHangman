
var canvas = document.getElementById("myCanvas");



function draw(moveTox, moveToy, lineTox, lineToy) {
  var line = canvas.getContext("2d");
  line.moveTo(moveTox, moveToy);
  line.lineTo(lineTox, lineToy);
  line.lineWidth = 5;
  line.strokeStyle = "black";
  line.stroke();
}

function platform1() {
  draw(5, 290, 210, 290);
}

function platform2() {
  draw(30, 6, 30, 290);
}

function platform3() {
  draw(27, 6, 153, 6);
}

function platform4() {
  draw(150, 6, 150, 40);
}

function platform5() {
  draw(30, 50, 60, 6);
}

function head() {
  var drawHead = canvas.getContext("2d");
  drawHead.beginPath();
  drawHead.arc(150, 70, 30, 0, 2 * Math.PI);
  drawHead.stroke();
}

function torso() {
  draw(150, 100, 150, 180);
}

function leftArm() {
  draw(100, 100, 150, 150);
}

function rightArm() {
  draw(150, 150, 200, 100);
}

function leftLeg() {
  draw(100, 250, 150, 180);
}

function rightLeg() {
  draw(200, 250, 150, 180);
}

var hangmanFrames = [
  rightLeg,
  leftLeg,
  rightArm,
  leftArm,
  torso,
  head,
  platform5,
  platform4,
  platform3,
  platform2,
  platform1
];

var drawHangman = function() {
  var frame = lives;
  hangmanFrames[frame]();
};