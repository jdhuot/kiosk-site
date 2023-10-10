// JavaScript Document
//Sets the timer for returning to the main menu as soon as the subject's page loads
		var timeoutHandle = setTimeout(function(){
            window.location.href = '../index.html';
         }, 120000); //in milliseconds



//Opens and plays the video. Triggered when user clicks the video thumbnail. Also clears stops and clears the timer.	
	$( document ).ready(function() {
  $('.video-link').click(function() {
    $('.myVideo').attr("src", $(this).attr("vidUrl"));
    $('.overlay').fadeIn(500, function(){
      $('.main-vid-box').fadeIn(500);
      $('.close').fadeIn(500);
		window.clearTimeout(timeoutHandle);
    });
  });
 
// The video close button. The user can click the X to close the video. This will also start the timer again. 		
  $('.close, .overlay').click(function() {
	$('.overlay').fadeOut(500);
    $('.myVideo').attr("src", $(this).attr("vidUrl"));
    $('.main-vid-box').fadeOut(500);
    $('.close').fadeOut(500);
	timeoutHandle = window.setTimeout(function(){
		window.location.href = '../index.html';
        }, 120000);
  });
});

//This section automatically closes the video once it finishes playing. It also starts the timer.	
    var v = document.getElementsByTagName("video")[0];
	v.addEventListener("ended", myHandler, false);
		function myHandler() {
		//console.trace("ended");
        $('.overlay').fadeOut(500);
    $('.myVideo').attr("src", $(this).attr("vidUrl"));
    $('.main-vid-box').fadeOut(500);
    $('.close').fadeOut(500);
		timeoutHandle = window.setTimeout(function(){
            window.location.href = '../index.html';
         }, 120000); 
    }

//This section checks if the video is paused. If paused for too long it will close down the video and set the timter.



$(function(){
	
	//var vids = document. getElementsByClassName('myVideo')
    
    var vids = $("video")[0];
	/*var vids = document.getElementsByTagName("video")[0]

	var itsPaused = function(){
		 console.trace("Paused");
	timeoutHandle = window.setTimeout(function(){
			window.location.href = '../index.html';}, 10000);
		if(vids.onended == false){
			console.trace("Ended")
		}
	}
	
	var itsEnded = function(){
		console.trace("ended")
	}
	
	vids.addEventListener('pause', itsPaused, true)
	vids.addEventListener('ended', itsEnded, true)
		vids.onended = function(){
		console.trace("Ended!")
		vids.removeEventListener ('pause',itsPaused, true)
	}*/

	/*vids.onended = function(){
		console.trace("ended")
		vids.removeEventListener('pause', itsPaused, true);
	}
	
	vids.onpause = function(){
          console.trace("Paused");
	timeoutHandle = window.setTimeout(function(){
			window.location.href = '../index.html';}, 10000); // sets the timer again if the video is in a state of pause 
    }

	vids.onplay = function(){
		console.trace("Playing")
		window.clearTimeout(timeoutHandle);
	} */
		vids.addEventListener('pause', function(){
         // console.trace("Paused");
	timeoutHandle = window.setTimeout(function(){
			window.location.href = '../index.html';},360000); // sets the timer again if the video is in a state of pause 
		})
   
    vids.addEventListener('playing', function(){
          // console.trace("Playing");
		window.clearTimeout(timeoutHandle); // making sure the timer is cleared if the video is paused then played again
    })

    
})