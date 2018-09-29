$(document).ready(function() {
	// set screen
	$(".loadHide").hide(); 
	$("#button").hide();
	$(".loose").hide();
	$(".winner").hide();
	$("#replay").hide();

	// enemy deaths
	var enemyDead = 0;
	// points incriment
	var p = 0;
	// enemy attcak points
	var Ep = 0;
	// points of enemy
	var enemyPoints;
	// points of defender
	var defenderPoints;
	// name of defender
	var defenderName = '';
	// name of enemy
	var enemyName = '';

	var slap = new Audio("assets/images/Slap.mp3");
	var cheer = new Audio("assets/images/Cheer.mp3");

	// selecting defender
	$(".players").click(function(event){
		// make movement
		$("#defender").prepend( $("#" + this.id) );
		// add to identify player
		$("#" + this.id).addClass('defender');
		// $("#" + this.id).removeClass('players');
		// change defender size
		$(".defender").animate({ height: "26vh", width: "12vw" });
		$(".defender>img").animate({ height: "22vh", width: "10vw" });
		// points of defender
		defenderPoints = $(".defender").text();
		// name of defender
		defenderName = $(".defender").children('img').prop('id');
		// set screen
		$("#playerList").hide();
    	$("#instructions").hide();
    	$(".loadHide").show();
    	enemies(this.id);
	});

	// select enemy
	$(document).on('click', '.myEnemy', function(event){
	
		// make movement
		$("#enemy").prepend( $("#" + this.id) );
		// add to identify current enemy
		$("#" + this.id).addClass('theEnemy');
		// points of enemy
		enemyPoints = $('.theEnemy').text();
		// get enemy name
		enemyName = $(".theEnemy").children('img').prop('id');
		// change size of enemy
		$(".theEnemy").animate({ height: "26vh", width: "12vw" });
		$(".theEnemy>img").animate({ height: "22vh", width: "10vw" });
		console.log(enemyName);
		// center enemies
		$(".enemySet").addClass('enemySet2').removeClass('enemySet');
		// show button
		$("#button").show();
		// remove enemy click
		rmEnemyClick();
		// set enemy and defender points
		enemyPointSet();
		defenderPointsSet();
	});

	// turn off enemy click
	function rmEnemyClick(){
		$(document).off();
	}


	function resetEnemyClick(){
		$(document).on('click', '.myEnemy', function(){
			$("#enemy").prepend( $("#" + this.id) );
			// add to identify current enemy
			$("#" + this.id).addClass('theEnemy');
			// points of enemy
			enemyPoints = $('.theEnemy').text();
			// get enemy name
			enemyName = $(".theEnemy").children('img').prop('id');
			// change size of enemy
			$(".theEnemy").animate({ height: "26vh", width: "12vw" });
			$(".theEnemy>img").animate({ height: "22vh", width: "10vw" });
			// remove enemy click
			rmEnemyClick();
			// enemyPointSet();
			enemyPointSet();
			$('#attck-btn').on('click', function(){
				// set defender increment
				if(defenderName == 'Mufasa'){
					p += 5;
				}else if(defenderName == 'Scar'){
					p += 8;
				}else if(defenderName == 'Simba'){
					p += 10;
				}else if(defenderName == "Pumbaa"){
					p += 13;
				}else if(defenderName == 'Timone'){
					p += 20;
				}
				// text for attck info
				$("#attackText").text('You attacked ' + $('.theEnemy').children('img').prop('id') + ' for ' + p + ' points').append('<br>');
				$("#attackText").append($('img').prop('id') + ' was attacked for ' + Ep + ' points');
				// calculates damage
				enemyPoints = parseInt(enemyPoints) - p;
				defenderPoints = parseInt(defenderPoints) - Ep;
				// determins action on death
				deadEnemy();
				deadDefender();
			});
		});
	}

	// set enemies
	function enemies(id){
		
		for (var i = 0; i <= 5; i++) {
			if(id != "player"+i){
				
				$("#enemies").prepend($("#player"+i));
				// turn off player click
				$('.players').prop('onclick',null).off('click');
				// add to idetify list of enemies
				$('#player'+i).addClass('myEnemy').removeClass('players');
				
			}
			
		}
	}

	
	function deadEnemy(){
		if(enemyPoints <= 0){
			enemyDead += 1
			// clear enemy and reset enemy click
			$('#enemy').empty();
			resetEnemyClick();
			// turn off attck buttton
			$('#attck-btn').off('click');
			$("#attackText").text("Choose your next opponent.")
			// enemy
			if(enemyDead == 4){
				$(".loadHide").hide(); 
				$(".winner").show();
				$("#replay").show();
				cheer.play();
			}

		}else{
			// sets points to screen
			$(".theEnemy > div").text(enemyPoints);
		}
	}

	function deadDefender(){
		if(defenderPoints <= 0){
			// clear and display loss 
			$('#defender').empty();
			$(".loadHide").hide(); 
			$(".loose").show();
			$("#replay").show();
			// $(".loose").append("<img src='assets/images/mufasa.jpg'>");
			var sadTrombone = new Audio("assets/images/Sad_Trombone.mp3");
			var scarAaudio = new Audio("http://wavcentral.com/sounds/movies/lionking/lionkg01.mp3");
			sadTrombone.play();
			setTimeout(function(){
				scarAaudio.play();
			}, 4000);
		}else{
			$(".defender > div").text(defenderPoints);
		}
	}
	
	// sets defender points
	function defenderPointsSet(){
		if(defenderName == 'Mufasa'){
			p = 20;
		}else if(defenderName == 'Scar'){
			p = 18;
		}else if(defenderName == 'Simba'){
			p = 15;
		}else if(defenderName == "Pumbaa"){
			p = 13;
		}else if(defenderName == 'Timone'){
			p = 5;
		}
	}

	// sets enemy points
	function enemyPointSet(){
		
		if(enemyName == 'Mufasa'){
			Ep = 20;
		}else if(enemyName == 'Scar'){
			Ep = 18;
		}else if(enemyName == 'Simba'){
			Ep = 15;
		}else if(enemyName == "Pumbaa"){
			Ep = 13;
		}else if(enemyName == 'Timone'){
			Ep = 5;
		}
	}

	// attack button
	$('#attck-btn').on('click',function(){
		// playSlap();
		console.log('called original function');
		// sets defender increment
		if(defenderName == 'Mufasa'){
			p += 5;
		}else if(defenderName == 'Scar'){
			p += 8;
		}else if(defenderName == 'Simba'){
			p += 10;
		}else if(defenderName == "Pumbaa"){
			p += 13;
		}else if(defenderName == 'Timone'){
			p += 20;
		}
		// slap.play();
		// text for attck info
		$("#attackText").text('You attacked ' + $('.theEnemy').children('img').prop('id') + ' for ' + p + ' points').append('<br>');
		$("#attackText").append($('img').prop('id') + ' was attacked for ' + Ep + ' points');
		// calculates damage
		enemyPoints = parseInt(enemyPoints) - p;
		defenderPoints = parseInt(defenderPoints) - Ep;
		// determins action on death
		deadEnemy();
		deadDefender();
		

	});

	$(button).on('click',function(){
		console.log("calling play slap");
		playSlap();

	});

	function playSlap(){
		console.log("called");
		slap.play();
		setTimeout(function(){
			slap.pause();
			slap.currentTime = 0;
		}, 500)
	}

	$('#replay').on('click', function(){
		location.reload();
	});

});