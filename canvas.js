let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

setTimeout(linkeroor, 1000);

function linkeroor() {
  //oor
  context.beginPath();
  context.arc(55,170,40,0,2*Math.PI);
  context.closePath();
  context.fillStyle = "darkgreen";
  context.fill();
  context.stroke();
  setTimeout(rechteroor, 1000);
};

function rechteroor() {
  //oor
  context.beginPath();
  context.arc(340,170,40,0,2*Math.PI);
  context.closePath();
  context.fillStyle = "darkgreen";
  context.fill();
  context.stroke();
  setTimeout(hoofd, 1000);
};

function hoofd() {
  //hoofd
  context.beginPath();
  context.arc(200,200,150,0,2*Math.PI);
  context.fillStyle = "yellow";
  context.fill();
  context.stroke();
  setTimeout(mond, 1000);
};

function mond() {
  //mond
  context.beginPath();
  context.arc(202,220,97,-0.1,0.95*Math.PI);
  context.closePath();
  context.fillStyle = "black";
  context.fill();
  context.strokeStyle = "blue";
  context.lineWidth = 4;
  context.stroke();
  setTimeout(rechteroog, 1000);
};

function rechteroog() {
  //oog
  context.beginPath();
  context.arc(290,130,40,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = "blue";
  context.lineWidth = 2;
  context.stroke();
  setTimeout(linkeroog, 1000);
};

function linkeroog() {
  //oog
  context.beginPath();
  context.arc(130,130,40,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = "blue";
  context.stroke();
  setTimeout(linkerpupil, 1000);
};

function linkerpupil() {
  //pupil
  context.beginPath();
  context.arc(147,133,20,0,2*Math.PI);
  context.closePath();
  context.fillStyle = "gray";
  context.fill();
  context.strokeStyle = "red";
  context.stroke();
  setTimeout(rechterpupil, 1000);
};

function rechterpupil() {
  //pupil
  context.beginPath();
  context.arc(274,133,20,0,2*Math.PI);
  context.closePath();
  context.fillStyle = "gray";
  context.fill();
  context.strokeStyle = "red";
  context.stroke();
  setTimeout(haar, 1000);
};

function haar() {
  //haar
  context.beginPath();
  context.moveTo(150,65);
  context.lineTo(155,35);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(160,65);
  context.lineTo(167,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(170,65);
  context.lineTo(185,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(180,65);
  context.lineTo(195,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(190,65);
  context.lineTo(205,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(200,65);
  context.lineTo(215,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(210,65);
  context.lineTo(225,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(220,65);
  context.lineTo(235,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(230,65);
  context.lineTo(245,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
  //haar
  context.beginPath();
  context.moveTo(245,65);
  context.lineTo(250,30);
  context.strokeStyle = "blue";
  context.lineWidth = 7;
  context.stroke();
};
