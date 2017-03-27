var canvas = document.getElementById('game-board'),
	ctx = canvas.getContext('2d'),
	background = new Image(),
	leftHand = new Image(),
	rightHand = new Image();

canvas.width = 1024;
canvas.height = 600;

background.src = "images/boxing-ring.png";
leftHand.src = "images/boxing-glove-left.png";
rightHand.src = "images/boxing-glove-right.png";

background.onload = function(){
	ctx.drawImage(background,0,0);
	ctx.drawImage(leftHand, 400, 500, 100, 100);
	ctx.drawImage(rightHand, 520, 500, 100, 100);
};