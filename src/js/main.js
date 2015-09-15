$(function(){
	$('#menu-toggle-btn').on('click',function(){
		var menuPosition = $('#main-menu-collapse').css('left');
		if (menuPosition != '0px'){
			$('#main-menu-collapse').animate({left: "0px"}, 200);
			$('body').animate({left: "265px"}, 200);
		} else{
			$('#main-menu-collapse').animate({left: "-280px"}, 200);
			$('body').animate({left: "0px"}, 200);
		};
	});
	$('.user-block').on('click',function(){
		var isClass = $(this).attr('class');
		if (isClass != 'user-block user-block-red') {
			$(this).addClass('user-block-red');
		} else {
			$(this).removeClass('user-block-red');
		}
	});
//	var text = $('.user-block-description').text();
//	if (text.length > 15){
//		var truncateText = text.trim().substring(0, 300) + "...";
//		$('.user-block-description').text(truncateText);
//	};
	$('.ellipsis').dotdotdot(); 
	
});