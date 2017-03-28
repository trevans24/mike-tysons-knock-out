//game board

//variables needed
console.log('test');
var canvas = document.querySelector('#game-board'),
	ctx = canvas.getContext('2d'),
	gameBoard = new Image(),
	leftHand = new Image(),
	rightHand = new Image(),
	mikeTyson = new Image(),
	leftX = 400,
	leftY = 500,
	rightX = 520,
	rightY = 500,
	timerDiv = document.querySelector('#timer'),
	start = document.querySelector('#start');

//canvas size
canvas.width = 1024;
canvas.height = 600;

//canvas images
gameBoard.src = "images/boxing-ring.png";
leftHand.src = "images/boxing-glove-left.png";
rightHand.src = "images/boxing-glove-right.png";
mikeTyson.src = "images/mike-tyson.png";

//on load up canvas is drawn
console.log('test1');
gameBoard.onload = function(){
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(leftHand, 400, 500, 100, 100);
	ctx.drawImage(rightHand, 520, 500, 100, 100);
	ctx.drawImage(mikeTyson, 240, 60, 500, 500);
};

// function to help animation of elements, clears canvas for new drawings
console.log('test2');
function clearCanvas(){
	canvas.width = canvas.width;
}

//punch animation on keypress
console.log('test3');
document.onkeydown = punch;
document.onkeyup = retract;

console.log('test4');
function punch(e){
	// if(e.keyCode == 65){
	// 	console.log('left1');
	// 	leftY -= 200;
	// 	console.log('left2');
	// } 
	// console.log('left3');
	// clearCanvas();
	// ctx.drawImage(gameBoard,0,0);
	// ctx.drawImage(leftHand, 400, leftY, 100, 100);
	// ctx.drawImage(rightHand, 520, 500, 100, 100);
	// ctx.drawImage(mikeTyson, 240, 60, 500, 500);

	if (e.keyCode == 68){
		console.log('right1');
		rightY -= 200;
		console.log('right2');
	}
	console.log('right3');
	clearCanvas();
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(leftHand, 400, 500, 100, 100);
	ctx.drawImage(rightHand, 520, rightY, 100, 100);
	ctx.drawImage(mikeTyson, 240, 60, 500, 500);
}

console.log('test5');
function retract(e){
	// if(e.keyCode == 65){
	// 	console.log('left4');
	// 	leftY += 200;
	// 	console.log('left5');
	// } 
	// clearCanvas();
	// ctx.drawImage(gameBoard,0,0);
	// ctx.drawImage(leftHand, 400, leftY, 100, 100);
	// ctx.drawImage(rightHand, 520, 500, 100, 100);
	// ctx.drawImage(mikeTyson, 240, 60, 500, 500);
	// console.log('left6');

	if (e.keyCode == 68){
		console.log('right4');
		rightY += 200;
		console.log('right5');
	}
	clearCanvas();
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(leftHand, 400, 500, 100, 100);
	ctx.drawImage(rightHand, 520, rightY, 100, 100);
	ctx.drawImage(mikeTyson, 240, 60, 500, 500);
	console.log('right6');
}
//scoreboard

//timer

var time = 60;
function timer(){
	setTimeout(function(){
		time--;
		timerDiv.innerHTML = time;
		timer();
	}, 1000);
		if (time === 0) {
			alert('Game Over');
		}
}
//check for win
// var a = //player ones score
// var b = //player twos score

// function win(a,b){
// 	if (a > b){
// 		//alert message of player one wins
// 	} else if (b > a){
// 		//alert message of player two wins
// 	}
// };

//reset button

//start game button
start.addEventListener("click", startGame);

function startGame(){
	timer();
}
//instructions button