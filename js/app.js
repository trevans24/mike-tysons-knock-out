//variables needed
var canvas = document.querySelector('#game-board'),
	ctx = canvas.getContext('2d'),
	gameBoard = new Image(),
	leftHand = new Image(),
	rightHand = new Image(),
	mikeTyson = new Image(),
	instruct = new Image(),
	player1win = new Image(),
	player2win = new Image(),
	draw = new Image(),
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
instruct.src = "images/instructions.png";
player1win.src = "images/player1-win.png";
player2win.src = "images/player2-win.png";
draw.src = "images/rematch.png";

//on load up canvas is drawn
gameBoard.onload = function(){
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(mikeTyson, 240, 160, 500, 500);
	ctx.drawImage(leftHand, 400, 400, 100, 100);
	ctx.drawImage(rightHand, 520, 400, 100, 100);
	ctx.drawImage(instruct, 165, 100, 700, 400);
};
//Gameboard start Round
gameBoard.startRound = function(){
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(mikeTyson, 240, 160, 500, 500);
	ctx.drawImage(leftHand, 400, 400, 100, 100);
	ctx.drawImage(rightHand, 520, 400, 100, 100);
};

// function to help animation of elements, clears canvas for new drawings
function clearCanvas(){
	canvas.width = canvas.width;
}

//punch animation on keypress
document.onkeydown = punch;
document.onkeyup = retract;

function punch(e){
	if(e.keyCode == 65){
		leftY -= 175;
		clearCanvas();
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, leftY, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
		score1();
	} 
	if (e.keyCode == 68){
		rightY -= 175;
		clearCanvas();
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, rightY, 100, 100);
		score1();
	}
}

function retract(e){
	if(e.keyCode == 65){
		leftY += 175;
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, leftY, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
	} 

	if (e.keyCode == 68){
		rightY += 175;
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(mikeTyson, 240, 160, 500, 500);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, rightY, 100, 100);
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
	if (time === 0 && currentPlayer === 1) {
		alert("Round Over, Player 2's turn");
		stopTime();
		scoreboard();
		round.style.opacity = '1';
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
}


//scoreboard
function score1(){
	s = setTimeout(function(){
		score ++;
		scoreDiv.innerText = score;
		stopScore();
	});

}

function stopScore(){
	if (time === 0 && currentPlayer === 1){
		clearTimeout(s);
	} else if (time === 0 && currentPlayer === 2){
		clearTimeout(s);
	}
}

//switch players or current players
function switchPlayer(){
	if(currentPlayer === 1){
		currentPlayerDiv.innerHTML = currentPlayer;
		currentPlayer ++;
		console.log('6');
		reset.style.opacity = '1';
	} else if( currentPlayer === 2){
		currentPlayerDiv.innerHTML = currentPlayer;
		currentPlayer --;
	}
}

//append player score to appropriate scoreboard
function scoreboard(){
	if (currentPlayer === 1){
		player1Score.innerHTML += scoreDiv.innerHTML;
	} else if (currentPlayer === 2){
		player2Score.innerHTML += scoreDiv.innerHTML;
	}
}

//check for win
function win(){
	if (player1Score.innerText > player2Score.innerText){
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
		ctx.drawImage(player1win, 210, 210, 600,174);
	}if (player2Score.innerText > player1Score.innerText){
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
		ctx.drawImage(player2win, 210, 210, 600,174);
	}if (player1Score.innerText === player2Score.innerText){
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(leftHand, 400, 400, 100, 100);
		ctx.drawImage(rightHand, 520, 400, 100, 100);
		ctx.drawImage(draw, 210, 210, 600,174);
	}
}

//reset button
reset.addEventListener("click", reset);

function reset(){
	reset.style.opacity = '0';
}

//start game button
start.addEventListener("click", startGame);

function startGame(){
	gameBoard.startRound();
	start.style.opacity = '0';
	timer();
	score1();
}
//next round
round.addEventListener("click", nextRound);

function nextRound(){
	timer();
	score1();
	score = -1;
	switchPlayer();
	currentPlayerDiv.innerHTML = "2";
	round.style.opacity = '0';
}

//instructions button
instruction.addEventListener("click", hide);
	
function hide(){
	ctx.drawImage(gameBoard,0,0);
	ctx.drawImage(mikeTyson, 240, 160, 500, 500);
	ctx.drawImage(leftHand, 400, 400, 100, 100);
	ctx.drawImage(rightHand, 520, 400, 100, 100);
	start.style.opacity = '1';

}

//storage
// sessionStorage.setItem('score', player1score);
// sessionStorage.getItem(score);