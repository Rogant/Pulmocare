$(window).load(function() {

	$( ".iAnimate" ).each(function( index ) {

		var animationConf = jQuery.parseJSON(($(this).attr("data-animate-on")));

		if(!animationConf.duration)
			animationConf.duration = "slow";

		if(!animationConf.queue)
			animationConf.queue = 1;

			$(this).effect( animationConf.effect, animationConf.adicionales, animationConf.duration );
			console.log("queue " + animationConf.queue);			
	});
	

	setTimeout(function(){

		$( ".iAnimate2" ).each(function( index ) {

			var animationConf = jQuery.parseJSON(($(this).attr("data-animate-on")));

			if(!animationConf.duration)
				animationConf.duration = "slow";

			if(!animationConf.queue)
				animationConf.queue = 1;

				$(this).effect( animationConf.effect, animationConf.adicionales, animationConf.duration );
				console.log("queue " + animationConf.queue);			
		});

	},1000);

	setTimeout(function(){

		$( ".iAnimate3" ).each(function( index ) {

			var animationConf = jQuery.parseJSON(($(this).attr("data-animate-on")));

			if(!animationConf.duration)
				animationConf.duration = "slow";

			if(!animationConf.queue)
				animationConf.queue = 1;

				$(this).effect( animationConf.effect, animationConf.adicionales, animationConf.duration );
				console.log("queue " + animationConf.queue);			
		});

	},2000);

	setTimeout(function(){

		$( ".iAnimate4" ).each(function( index ) {

			var animationConf = jQuery.parseJSON(($(this).attr("data-animate-on")));

			if(!animationConf.duration)
				animationConf.duration = "slow";

			if(!animationConf.queue)
				animationConf.queue = 1;

				$(this).effect( animationConf.effect, animationConf.adicionales, animationConf.duration );
				console.log("queue " + animationConf.queue);			
		});

	},3000);


	$(".fancybox").fancybox();
});