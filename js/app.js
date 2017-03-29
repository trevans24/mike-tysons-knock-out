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
	s1,
	scoreDiv = document.querySelector('#score-board'),
	timerDiv = document.querySelector('#timer'),
	player1Score = document.querySelector('#p1score'),
	player2Score = document.querySelector('#p2score'),
	currentPlayerDiv = document.querySelector('#player'),
	start = document.querySelector('#start'),
	instructions = document.querySelector('#instructions'),
	instruction = document.querySelector('#instruction'),
	reset = document.querySelector('#reset'),
	round = document.querySelector('#nextRound'),
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
//timer go
function timer(){
	t = setTimeout(function(){
		time --;
		timerDiv.innerHTML = time;
		timer();
	}, 1000);
	console.log('1');
	timeZero();
}

function timeZero(){
	if (time === 0 && currentPlayer === 1) {
		alert('Round 1 Over');
		stopTime();
		scoreboard();
		console.log('2');
	}else if (time === 0 && currentPlayer === 2){
		stopTime();
		scoreboard();
		win();
	}
}

//timer stop
function stopTime(){
	clearTimeout(t);
	time = 60;
	console.log('3');
}


//scoreboard
function score1(){
	s = setTimeout(function(){
		score ++;
		scoreDiv.innerHTML = score;
		console.log('4');
	});

}

function score2(){
	s1 = setTimeout(function(){
		score ++;
		scoreDiv.innerHTML = score;
		console.log('10');
	})
}

function stopScore(){
	if (time === 0);
	clearTimeout(s);
	score = s;
	console.log('5');
}

//switch players or current players
currentPlayerDiv.innerHTML = currentPlayer;
function switchPlayer(){
	if(currentPlayer === 1){
		console.log(currentPlayer + " 1");
		currentPlayer ++;
		console.log('6');
	} else {
		console.log(currentPlayer + " 2");
		currentPlayerDiv.innerHTML = currentPlayer;
		currentPlayer --;
		console.log('7');
	}
}

//append player score to appropriate scoreboard
function scoreboard(){
	if (currentPlayer === 1){
		player1Score.innerHTML += scoreDiv.innerHTML;
		console.log('8');
	} else {
		player2Score.innerHTML += scoreDiv.innerHTML;
		console.log('9');
	}
}

//check for win
function win(){
	if (player1Score.innerHTML > player2Score.innerHTML){
		alert("Player 1 Wins!");
	} else if (player2Score.innerHTML > player1Score.innerHTML){
		alert("Player 2 Wins!");
	}else {
		alert("Draw");
	}
}

//reset button
reset.addEventListener("click", reset);

function reset(){
	scoreDiv.innerHTML = "0";
	timerDiv.innerHTML = "60";
	player1Score.innerHTML = "0";
	player2Score.innerHTML = "0";
}

//start game button
start.addEventListener("click", startGame);

function startGame(){
	start.style.opacity = '0';
	timer();
	score1();
}
//next round
round.addEventListener("click", nextRound);

function nextRound(){
	timer();
	score2();
	switchPlayer();
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
