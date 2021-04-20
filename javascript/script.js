$(document).ready(function() {

	console.log("test");

	 $(".shuffle-img").shuffleImages({
   trigger: "imageMouseMove",
   triggerTarget: false,
   mouseMoveTrigger: 50,
   hoverTrigger: 200,
   scrollTrigger: 100,
   target: "> img"
 });

	 var $gallery = $('.gallery-2 a').simpleLightbox();

	 $("#gallery-2").hide();

	 $("#button-2").click(function(){
		 $("#gallery-1").hide();
		 $("#gallery-2").show();
	});

	 $("#button-1").click(function(){
		 $("#gallery-2").hide();
		 $("#gallery-1").show();
	});

});


