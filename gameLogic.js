window.onload = function(){
	var startResetbtn = document.getElementById('startReset');
	var playing = false;
	var score = 0; 
	var action;
	var countDown = document.getElementById('timeRemainValue');
	var gameOver  = document.getElementById('gameOver');
	var scoredValue = document.getElementById('scoredValue');
	var timeRemaining;
	var correctAnswer;

	startResetbtn.addEventListener('click',function(){
//		playing = true;
		if(playing){
		//reload the page
			location.reload();
		}
		else{
			//change mode to playing
			playing = true;
			hide("gameOver");
			//initial values
			document.getElementById('scoreValue').innerHTML = score;
			//show countDown
			show("timeRemaining");
			timeRemaining = 60;
			countDown.innerHTML = timeRemaining;
			//change start button to reset button
			startResetbtn.innerHTML = "Reset Game";
			startTimer();
			
			 //generate Q/A
			generateQA();
		for(i=1; i<5; i++){   
			document.getElementById("box"+i).onclick = function(){    
			//check if we are playing          
			if(playing == true){//yes    
				if(this.innerHTML == correctAnswer){        
					//correct answer    
					//increase score by 1  
					score++;      
					document.getElementById('scoreValue').innerHTML = score;
					//hide wrong box and show correct box     
					hide("wrong");       
					show("correct");       
					setTimeout(function(){     
						hide("correct");      
					}, 1000);        
					//Generate new Q&A   
					generateQA();     
				}else{     
					//wrong answer   
					hide("correct");   
					show("wrong");   
					setTimeout(function(){     
						hide("wrong");   
					}, 1000);     
				}
			}
		}
	}
		}
});
	
	//Functions 
	
	// start counter
	function startTimer(){
		 action = setInterval(function(){
			timeRemaining -= 1;
			countDown.innerHTML = timeRemaining;
			//add check
			if(timeRemaining == 0){
				stopCountDown();
			}
		},1000);
	}
	
	//stop counter
	function stopCountDown(){
				clearInterval(action);
				show("gameOver");
				scoredValue.innerHTML = score;
				hide("timeRemaining");
				hide("correct");
				hide("wrong");
				playing = true;
				startResetbtn.innerHTML = "Play Again!";
	}
	function hide(Id){
		document.getElementById(Id).style.display = "none";
	}
	function show(Id){
		document.getElementById(Id).style.display = "block";
	}
	
	//generate question and answers
	function generateQA(){
		var x = 1 + Math.round(Math.random()*9);
		var y = 1 + Math.round(Math.random()*9);
		document.getElementById('question').innerHTML = x + "x" + y;
		correctAnswer = x * y;
		var correctPosition = 1 + Math.round(Math.random()*3);
		var answers = [correctAnswer];
		document.getElementById('box'+correctPosition).innerHTML = correctAnswer;
		for(var wrongPosition=1; wrongPosition<5; wrongPosition++){
			var wrongAnswer;
			if(wrongPosition !== correctPosition){
				do{
				var wrongAnswer = 1 + Math.round(Math.random()*99);
				}while(answers.indexOf(wrongAnswer)>-1)
				document.getElementById('box'+wrongPosition).innerHTML = wrongAnswer;
				answers.push(wrongAnswer);
			}
			
		}
	}
	function clickBox(){
		
		
	}
}