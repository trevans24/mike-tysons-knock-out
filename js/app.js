//game board

//variables needed
console.log('test');
var canvas = document.querySelector('#game-board'),
	ctx = canvas.getContext('2d'),
	gameBoard = new Image(),
	leftHand = new Image(),
	rightHand = new Image(),
	mikeTyson = new Image(),
	pow = new Image(),
	star = new Image(),
	leftX = 400,
	leftY = 400,
	rightX = 520,
	rightY = 400,
	time = 60,
	t,
	score = -1,
	s,
	scoreDiv = document.querySelector('#score-board'),
	timerDiv = document.querySelector('#timer'),
	player1Score = document.querySelector('#p1score'),
	player2Score = document.querySelector('#p2score'),
	start = document.querySelector('#start'),
	instructions = document.querySelector('#instructions'),
	instruction = document.querySelector('#instruction'),
	reset = document.querySelector('#reset'),
	currentPlayer = 1;

//canvas size
canvas.width = 1024;
canvas.height = 600;

//canvas images
gameBoard.src = "images/boxing-ring.png";
leftHand.src = "images/boxing-glove-left.png";
rightHand.src = "images/boxing-glove-right.png";
mikeTyson.src = "images/mike-tyson.png";
pow.src = "images/pow.png";

//on load up canvas is drawn
console.log('test1');
gameBoard.onload = function(){
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(mikeTyson, 240, 160, 500, 500);
	ctx.drawImage(leftHand, 400, 400, 100, 100);
	ctx.drawImage(rightHand, 520, 400, 100, 100);
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
	if(e.keyCode == 65){
		console.log('left1');
		leftY -= 175;
		console.log('left2');
	
		clearCanvas();
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, leftY, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
		score1();
	} 
	console.log('left3');

	if (e.keyCode == 68){
		console.log('right1');
		rightY -= 175;
		console.log('right2');

		clearCanvas();
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, rightY, 100, 100);
		// ctx.drawImage(pow, 475, 0, 300, 300);
		score1();
	}
	console.log('right3');
}

console.log('test5');
function retract(e){
	if(e.keyCode == 65){
		console.log('left4');
		leftY += 175;
		console.log('left5');

		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, leftY, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
		console.log('left6');
	} 

	if (e.keyCode == 68){
		console.log('right4');
		rightY += 175;
		console.log('right5');

		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, rightY, 100, 100);
		console.log('right6');
	}
	
}
//scoreboard
function score1(){
	s = setTimeout(function(){
		score ++;
		scoreDiv.innerHTML = score;
	});

}

function stopScore(){
	if (time === 0);
	clearTimeout(s);
	score = s;
}
//switch players or current players
function switchPlayer(){
	if(currentPlayer === 1){
		currentPlayer = 2;
	} else {
		win();
	}
}
//append player score to appropriate scoreboard
function scoreboard(){
	if (currentPlayer === 1){
		player1Score.innerHTML += scoreDiv.innerHTML;
	} else {
		player2Score.innerHTML += scoreDiv.innerHTML;
	}
}
//timer go
function timer(){
	t = setTimeout(function(){
		time --;
		timerDiv.innerHTML = time;
		timer();
	}, 1000);
	timeZero();
}

function timeZero(){
	if (time === 0) {
			alert('Round Over');
			stopTime();
			switchPlayer();
			scoreboard();
		}
}

//timer stop
function stopTime(){
	clearTimeout(t);
	time = 60;
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
reset.addEventListener("click", reset);

function reset(){
	scoreDiv.innerHTML = "";
	timerDiv.innerHTML = "";
}

//start game button
start.addEventListener("click", startGame);

function startGame(){
	start.style.opacity = '0';
	timer();
	score1();
}
//instructions button
instruction.addEventListener("click", show);

function show(){
	if (instructions.style.display === 'none'){
		instructions.style.display = 'block';
} else {
	instructions.style.display = 'none';
}
}
