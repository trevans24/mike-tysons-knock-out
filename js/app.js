//variables needed
var canvas = document.querySelector('#game-board'),
	ctx = canvas.getContext('2d'),
	gameBoard = new Image(),
	mikeTyson = new Image(),
	mikeTysonLeft = new Image(),
	mikeTysonRight = new Image(),
	littleMac = new Image(),
	littleMacLeft = new Image(),
	littleMacLeftEnd = new Image(),
	littleMacRight = new Image(),
	littleMacRightEnd = new Image(),
	instruct = new Image(),
	player1win = new Image(),
	player2win = new Image(),
	draw = new Image(),
	endRound = new Image(),
	end = new Image(),
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
	giveUp = document.querySelector('#giveUp'),
	reset = document.querySelector('#reset'),
	round = document.querySelector('#nextRound'),
	hit = document.querySelector('#punch'),
	boxing = document.querySelector('#boxing'),
	intro = document.querySelector('#intro'),
	winner = document.querySelector('#win'),
	gameOver = document.querySelector('#game-over'),
	rematch = document.querySelector('#rematch'),
	roundStart = document.querySelector('#round-start'),
	itsTime = document.querySelector('#its-time'),
	currentPlayer = 1;

//canvas size
canvas.width = 1024;
canvas.height = 600;

//canvas images
gameBoard.src = "images/boxing-ring.png";
mikeTyson.src = "images/mike-tyson-standing.png";
mikeTysonLeft.src = "images/mike-tyson-hit-left.png";
mikeTysonRight.src = "images/mike-tyson-hit-right.png";
instruct.src = "images/instructions.png";
player1win.src = "images/player1-win.png";
player2win.src = "images/player2-win.png";
draw.src = "images/rematch.png";
endRound.src = "images/end-of-round.png";
end.src = "images/game-over.png";
littleMac.src = "images/little-mac.png";
littleMacLeft.src = "images/little-mac-left.png";
littleMacLeftEnd.src = "images/little-mac-left-end.png";
littleMacRight.src = "images/little-mac-right.png";
littleMacLeftEnd.src = "images/little-mac-right-end.png";

//on load up canvas is drawn
gameBoard.onload = function(){
	intro.play();
	ctx.drawImage(gameBoard, 0, 0);
	ctx.drawImage(instruct, 165, 100, 700, 400);
};
//Gameboard start Round
gameBoard.startRound = function(){
	ctx.drawImage(gameBoard, 0, 0);
	ctx.drawImage(mikeTyson, 440, 200, 140, 250);
	ctx.drawImage(littleMac, 440, 250, 140, 250);
};

// function to help animation of elements, clears canvas for new drawings
function clearCanvas(){
	canvas.width = canvas.width;
}

//punch animation on keypress
document.onkeydown = punch;
document.keypress = punchEnd;
document.onkeyup = retract;

function punch(e){
	if(e.keyCode == 65){
		clearCanvas();
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(mikeTysonLeft, 440, 200, 140, 250);
		ctx.drawImage(littleMacLeft, 440, 250, 140, 250);
		score1();
	} 
	if (e.keyCode == 68){
		clearCanvas();
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(mikeTysonRight, 440, 200, 140, 250);
		ctx.drawImage(littleMacRight, 440, 250, 140, 250);
		score1();		
	}
}

function punchEnd(e){
	if(e.keyCode == 65){
		clearCanvas();
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(mikeTysonLeft, 440, 200, 140, 250);
		ctx.drawImage(littleMacLeftEnd, 440, 250, 140, 250);
	}
	if(e.keyCode == 68){
		clearCanvas();
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(mikeTysonLeft, 440, 200, 140, 250);
		ctx.drawImage(littleMacReftEnd, 440, 250, 140, 250);
	}
}

function retract(e){
	if(e.keyCode == 65){
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(mikeTyson, 440, 200, 140, 250);
		ctx.drawImage(littleMac, 440, 250, 140, 250);
	} 
	if (e.keyCode == 68){
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(mikeTyson, 440, 200, 140, 250);
		ctx.drawImage(littleMac, 440, 250, 140, 250);
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
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(endRound, 150, 100, 700, 400);
		roundStart.play();
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
		currentPlayer ++;
		// reset.style.opacity = '1';
	} else if( currentPlayer === 2){
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
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(player1win, 210, 210, 600,174);
		// reset.style.opacity = '1';
		winner.play();
	}if (player2Score.innerText > player1Score.innerText){
		ctx.drawImage(gameBoard, 0, 0);
		ctx.drawImage(player2win, 210, 210, 600,174);
		// reset.style.opacity = '1';
		winner.play();
	}if (player1Score.innerText === player2Score.innerText){
		ctx.drawImage(gameBoard,0,0);
		ctx.drawImage(draw, 210, 210, 600,174);
		// reset.style.opacity = '1';
		rematch.play();
	}
}

//reset button
// reset.addEventListener("click", reset);

// function reset(){
// 	rematch.play();
// 	player1Score.innerText = "";
// 	player2Score.innerText = "";
// 	time = "";
// 	score = "";
// 	reset.style.opacity = '0';
// 	start.style.opacity = '1';
// }

//start game button
start.addEventListener("click", startGame);

function startGame(){
	gameBoard.startRound();
	boxing.play();	
	start.style.opacity = '0';
	timer();
	score1();
}
//next round
round.addEventListener("click", nextRound);

function nextRound(){
	boxing.play();
	timer();
	score1();
	score = -1;
	switchPlayer();
	gameBoard.startRound();
	round.style.opacity = '0';
}

//instructions button
instruction.addEventListener("click", hide);
	
function hide(){
	itsTime.play();
	ctx.drawImage(gameBoard, 0, 0);
	ctx.drawImage(mikeTyson, 440, 200, 140, 250);
	start.style.opacity = '1';
	instruction.style.opacity = '0';

}

//Give Up?
giveUp.addEventListener("click", giveIn);

function giveIn(){
	gameOver.play();
	ctx.drawImage(gameBoard, 0, 0);
	ctx.drawImage(end, 100, 0, 800, 600);
}
//storage
// sessionStorage.setItem('score', player1score);
// sessionStorage.getItem(score);