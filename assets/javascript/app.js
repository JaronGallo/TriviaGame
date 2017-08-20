window.onload = function() {



var win = 0;
var lose = 0;
var done = false;
var timer = 61;
var button = false;

$("#btn1").click(function(){

//==================<Beer>==================//
 var check = $("#beer2").is(":checked");
 	if(check){	
 		win++;
 		$("#wins").text(win);
 	
 		
 	} else {
 		lose++;
 		$("#fail").text(lose);
 	}

//==================<LastName>==================//
var second = $("#lastname2").is(":checked");
if(second){	
 		win++;
 		$("#wins").text(win);
 	
 		
 	} else {
 		lose++;
 		$("#fail").text(lose);
 	}



//==================<Pet>==================//
var third = $("#pet3").is(":checked");
if(third){	
 		win++;
 		$("#wins").text(win);
 	
 		
 	} else {
 		lose++;
 		$("#fail").text(lose);
 	}
//==================<Born>==================//
var forth = $("#born2").is(":checked");
if(forth){	
 		win++;
 		$("#wins").text(win);
 	
 		
 	} else {
 		lose++;
 		$("#fail").text(lose);
 	}
//==================<Color>==================//
var fifth = $("#color1").is(":checked");
if(fifth){	
 		win++;
 		$("#wins").text(win);
 	
 		
 	} else {
 		lose++;
 		$("#fail").text(lose);
 	}
//==================<Goals>==================//
var last = $("#goal2").is(":checked");
if(last){	
 		win++;
 		$("#wins").text(win);
 	
 		
 	} else {
 		lose++;
 		$("#fail").text(lose);
 	}

//==============<Disable Buttons=============//
$(" input ").attr('disabled', 'disabled');
$("#btn1").attr('disabled', 'disabled');





stop();

});
//==================<Timer>==================//

function counter() {
	setTimeout(counter,1000);
	timer--;
	$("#counter").text(timer);

	if (timer===0){
	

	done = true;

	setTimeout(counter,1000);
	timer++;
	} 

	else if (button===true) {
		$("#counter").html("Let's See If You Know Me!");
	}
	if (done===true) {
		$("#counter").html("Time is up!");
		$(" input ").attr('disabled', 'disabled');
		$("#btn1").attr('disabled', 'disabled');
	}
}

function stop() {
	$("#counter").html("Let's See If You Know Me!");
	button = true;

	setTimeout(counter,1000);
	timer++;
}


counter();
// function down (){
// 	setInterval(counter, 1000);
// 	setTimeout(clearInterval(),5000);
	



// }

// down();






};