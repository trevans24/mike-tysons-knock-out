var canvas = document.getElementById('game-board'),
	ctx = canvas.getContext('2d'),
	background = new Image();

canvas.width = 1024;
canvas.height = 600;

background.src = "images/boxing-ring.png";

background.onload = function(){
	ctx.drawImage(background,0,0);
};