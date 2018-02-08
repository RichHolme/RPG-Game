$(document).ready(function() {
	$(".loadHide").hide(); 
	
	// selecting defender
	$(".players").click(function(event){
		$("#defender").prepend( $("#" + this.id) );
		$("#playerList").hide();
    	$("#instructions").hide();
    	$(".loadHide").show();
    	enemies(this.id);
	});

	// select enemy
	$(document).on('click', '.myEnemy', function(event){
		$("#enemy").prepend( $("#" + this.id) );
		$(".enemySet").addClass('enemySet2').removeClass('enemySet')
	});

	// set enemies
	function enemies(id){
		
		for (var i = 0; i <= 5; i++) {
			if(id != "player"+i){
				
				$("#enemies").prepend($("#player"+i));
				$('.players').prop('onclick',null).off('click');
				$('#player'+i).addClass('myEnemy').removeClass('players');
				
			}
			
		}
	}

});