

$(document).ready(function(){

	$(".btn-open").on("click", function(){

		$(".contain").css({"transform":" rotateX( -270deg )" });
		$(".btn-open").fadeOut(700);
		$(".btn-closed").delay(1500).fadeIn(700);
		$(".card").delay(1500).animate({"bottom":"7rem"},700, 

		function(){ 
		$(".card").css({"box-shadow": "2px -1px 10px rgb(30, 30, 30)"})
		});
	});

	$(".btn-closed").on("click", function(){

		$(".btn-open").delay(1500).fadeIn(700);
		$(".btn-closed").fadeOut(700);
		$(".card").animate({"bottom":"0"},700, 

		function(){
		$(".card").css({"box-shadow": "none"});
		$(".contain").css({"transform":" rotateX( 0deg )" });
		});
	});

	$("section").hover(function(){},

		function(){ 
		$(".btn-open").delay(1800).fadeIn(700);
		$(".btn-closed").fadeOut(700);
		$(".card").animate({"bottom":"0"},700, 

		function(){
		$(".card").css({"box-shadow": "none"});
		$(".contain").css({"transform":" rotateX( 0deg )" });
		});
	});
});